import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesPeriodService } from '../services-period.service';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-period-update',
  templateUrl: './period-update.component.html',
  styleUrls: ['./period-update.component.css'],
})
export class PeriodUpdateComponent implements OnInit {
  //variables
  userData: any
  constructor(
    public restUser: ServiceUserService,
    public rest: ServicesPeriodService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  @Input() periodDataupdate: any;

  ngOnInit(): void {
    this.rut();
  }
  rut() {
    let idU = localStorage.getItem("idUsuario");

    this.rest.get(this.route.snapshot.params['ID'], idU).subscribe((data: {}) => {
      this.periodDataupdate = data;
    });

  }
  update() {
    let idU = localStorage.getItem("idUsuario");

    this.rest
      .update(this.periodDataupdate, this.route.snapshot.params['ID'], idU)
      .subscribe(
        (result) => {
          Swal.fire('Buen trabajo!', 'Periodo actualizado con exito!', 'success');
          this.router.navigate(['/periodList']);

        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al actualizar el periodo!',
          });
        }
      );
  }

  valitation() {
    if (this.periodDataupdate.TC_Nombre.length == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al actualizar el periodo!',
      });
    } else {
      this.update();
    }
  }
}
