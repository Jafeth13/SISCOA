import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesControllersService } from '../services-controllers.service';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceConditionService } from '../service-condition.service';
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
    private router: Router
  ) {}
  ngOnInit(): void {
    this.rut();
    this.restPeriod.periodList().subscribe((pos) => {
      console.log(pos);
      this.dataPeriod = pos;
    });
    this.restConditional.conditionalList().subscribe((pos) => {
      console.log(pos);
      this.dataConditional = pos;
    });
  }

  rut() {
    this.restControl
      .get(this.route.snapshot.params['ID'])
      .subscribe((data: {}) => {
        console.log(data);
        this.controlDataDelete = data;
      });
  }
  temp: any;
  update() {
    this.temp = this.controlDataDelete.TB_NotificacionCorreoAColaborador;
    if (this.temp == 'no') {
      this.controlDataDelete.TB_NotificacionCorreoAColaborador = false;
    } else {
      this.controlDataDelete.TB_NotificacionCorreoAColaborador = true;
    }
    console.log(this.route.snapshot.params['ID']);
    this.restControl
      .update(this.route.snapshot.params['ID'], this.controlDataDelete)
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
          console.log(err);
        }
      );
  }
}
