import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesControllersService } from '../services-controllers.service';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceConditionService } from '../service-condition.service';
import { OfficeControlServicesService } from '../office-control-services.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, ReplaySubject } from 'rxjs';
@Component({
  selector: 'app-complete-control',
  templateUrl: './complete-control.component.html',
  styleUrls: ['./complete-control.component.css']
})
export class CompleteControlComponent implements  OnInit{
  dataPeriod: any;
  dataConditional: any;
  @Input() controlDataDelete: any;

  constructor(
    public restControl: ServicesControllersService,
    public restPeriod: ServicesPeriodService,
    public rest: ServicesControllersService,
    public restOfficeControl: OfficeControlServicesService,
    public restConditional: ServiceConditionService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }
  ngOnInit(): void {
    this.rut();
  }

  rut() {
    let idU = localStorage.getItem('idUsuario');

    this.rest
      .getControlId(this.route.snapshot.params['ID'], idU)
      .subscribe((pos) => {
        this.controlDataDelete = pos;
      });

    this.restPeriod.periodList(idU).subscribe((pos) => {
      this.dataPeriod = pos;
    });
    this.restConditional.conditionalList(idU).subscribe((pos) => {
      this.dataConditional = pos;
    });
  }
  verification: any
  add() {
    let idU = localStorage.getItem('idUsuario');

    this.controlDataDelete.FK_TN_ESTADO_SISCOA_OficinaControl=2;
    if (this.verification == true && this.controlDataDelete.Archivos.length != 0) {
      this.restOfficeControl
        .update(this.controlDataDelete.ID, this.controlDataDelete, idU)
        .subscribe(
          (result) => {
            Swal.fire('Buen trabajo!', 'Control completado!', 'success');
            this.back();
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Es necesario un archivo PDF!',
      });
    }
  }
  back() {
    this.router.navigate(['/controloficesub']);
  }
  private fileTemp: any;
  getFile($event: any) {
    this.fileTemp = $event.target.files[0];
    if (this.fileTemp.type == 'application/pdf') {
      var reader = new FileReader();
      reader.readAsDataURL(this.fileTemp);
      reader.onload = (_event) => {
        this.controlDataDelete.Archivos = [
          {
            "ID": 0,
            "TC_Nombre": this.fileTemp.name,
            "TC_Datos": reader.result,
            "FK_TN_OficinaControl_SISCOA_Archivo": this.controlDataDelete.ID
          }
        ];
      };
      this.verification = true;
    } else {
      this.verification = false;
    }
  }

}
