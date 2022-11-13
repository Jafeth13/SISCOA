import { ServicesControllersService } from '../services-controllers.service';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceConditionService } from '../service-condition.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-control-register',
  templateUrl: './control-register.component.html',
  styleUrls: ['./control-register.component.css'],
})
export class ControlRegisterComponent implements OnInit {
  userData: any;
  temp: any;
  constructor(
    public restUser: ServiceUserService,
    public restControl: ServicesControllersService,
    public restPeriod: ServicesPeriodService,
    public restConditional: ServiceConditionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  dataPeriod: any;
  dataConditional: any;
  @Input() controlData = {
    ID: 0,
    TC_Nombre: '',
    TC_DescriptionDocumentacionEvidencia: '',
    TB_NotificacionCorreoAColaborador: false,
  };
  ngOnInit(): void {
    this.rut();
  }

  add() {
    let idU = localStorage.getItem('idUsuario');
   

    this.restControl.add(this.controlData, idU).subscribe(
      (result) => {
        Swal.fire('Buen trabajo!', 'El control fue registrado!', 'success');
        this.back();
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al registrar el control!',
        });
        console.log(err);
      }
    );
  }
  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.restPeriod.periodList(idU).subscribe((pos) => {
      this.dataPeriod = pos;
    });
    this.restConditional.conditionalList(idU).subscribe((pos) => {
      this.dataConditional = pos;
    });
  }

  back() {
    this.router.navigate(['/listControl']);
  }
}
