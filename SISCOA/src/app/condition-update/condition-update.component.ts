import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceConditionService } from '../service-condition.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-condition-update',
  templateUrl: './condition-update.component.html',
  styleUrls: ['./condition-update.component.css'],
})
export class ConditionUpdateComponent implements OnInit {
  constructor(
    public restUser: ServiceUserService,
    public rest: ServiceConditionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  @Input() statusDataupdate: any;
  userData: any;

  ngOnInit(): void {
    this.rut();
  }
  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.rest
      .get(this.route.snapshot.params['ID'], idU)
      .subscribe((data: {}) => {
        this.statusDataupdate = data;
      });
  }
  update() {
    let idU = localStorage.getItem('idUsuario');
    this.rest
      .update(this.statusDataupdate, this.route.snapshot.params['ID'], idU)
      .subscribe(
        (result) => {
          Swal.fire('Buen trabajo!', 'EL estado se actualizo!', 'success');
          this.router.navigate(['/conditionList']);
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
    if (this.statusDataupdate.TC_Nombre.length==0) {
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
