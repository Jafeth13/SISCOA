import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesControllersService } from '../services-controllers.service';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceConditionService } from '../service-condition.service';
import { OfficeControlServicesService } from '../office-control-services.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-complete-control-fill',
  templateUrl: './complete-control-fill.component.html',
  styleUrls: ['./complete-control-fill.component.css'],
})
export class CompleteControlFillComponent implements OnInit {
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
  ) {}
  ngOnInit(): void {
    this.rut();
  }

  rut() {
    let idU = localStorage.getItem('idUsuario');

    this.rest
      .getControlId(this.route.snapshot.params['ID'], idU)
      .subscribe((pos) => {
        this.controlDataDelete = pos;
        console.log(pos);
      });

    this.restPeriod.periodList(idU).subscribe((pos) => {
      this.dataPeriod = pos;
    });
    this.restConditional.conditionalList(idU).subscribe((pos) => {
      this.dataConditional = pos;
    });
  }

  add() {
    let idU = localStorage.getItem('idUsuario');
    const body = new FormData();
   
    
   
    console.log(this.controlDataDelete);
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
  }
  back() {
    this.router.navigate(['/controlOfice']);
  }
  private fileTemp: any;
  getFile($event: any) {
    const [file] = $event.target.files;
    this.controlDataDelete.Archivos.TC_Nombre = this.fileTemp.fileName;
    this.controlDataDelete.Archivos.FK_TN_OficinaControl_SISCOA_Archivo =this.controlDataDelete.ID;
    this.controlDataDelete.Archivos.TC_Datos=this.getBase64(file);
    console.log(this.controlDataDelete)
    this.fileTemp = {
      fileRaw: file,
      fileName: file.name,
    };
  }
  doc:any
   getBase64(file:any) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
     
      return reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }


}
