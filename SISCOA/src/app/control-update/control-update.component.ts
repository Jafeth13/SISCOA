import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesControllersService } from '../services-controllers.service';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceConditionService } from '../service-condition.service';
import { ServiceUserService } from '../service-user.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-control-update',
  templateUrl: './control-update.component.html',
  styleUrls: ['./control-update.component.css'],
})
export class ControlUpdateComponent implements OnInit {
  dataPeriod: any;
  dataConditional: any;
  @Input() controlDataDelete: any;
  constructor(
    public restControl: ServicesControllersService,
    public restPeriod: ServicesPeriodService,
    public restConditional: ServiceConditionService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService 
  ) {}
  ngOnInit(): void {
    this.rut();
  }
userData:any
  rut() {   
    let idU =  localStorage.getItem("idUsuario") ;
    this.restControl
      .get(this.route.snapshot.params['ID'],idU)
      .subscribe((data: {}) => {
        this.controlDataDelete = data;
      });


  }
  temp: any;
  update() {
    let idU =  localStorage.getItem("idUsuario") ;

    this.temp=this.controlDataDelete.TB_NotificacionCorreoAColaborador
    if(this.temp=='no'){
      this.controlDataDelete.TB_NotificacionCorreoAColaborador=false
    }else{
      if(this.temp=='si')
      this.controlDataDelete.TB_NotificacionCorreoAColaborador=true
    }
    this.restControl
      .update(this.controlDataDelete,this.controlDataDelete.ID,idU)
      .subscribe(
        (data) => {
          Swal.fire('Good job!', 'estado sucessfully updated!', 'success');
          this.router.navigate(['/listControl']);
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
}
