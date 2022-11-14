import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesControllersService } from '../services-controllers.service';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceConditionService } from '../service-condition.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-control-update',
  templateUrl: './control-update.component.html',
  styleUrls: ['./control-update.component.css'],
})
export class ControlUpdateComponent implements OnInit {
  dataPeriod: any;
  dataConditional: any;
  @Input() controlDataUpdate: any;
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
        this.controlDataUpdate = data;
      });


  }
  temp: any;
  update() {
    let idU =  localStorage.getItem("idUsuario") ;

    this.restControl
      .update(this.controlDataUpdate,this.controlDataUpdate.ID,idU)
      .subscribe(
        (data) => {
          Swal.fire('Buen trabajo!', 'EL control fue actualizado!', 'success');
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
  valitation(){
    if (this.controlDataUpdate.TC_Nombre.length==0||this.controlDataUpdate.TC_DescriptionDocumentacionEvidencia.length==0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error,rellena la informacion solicitada!',
      });
    }else{
     this.update();
    }
  }
}
