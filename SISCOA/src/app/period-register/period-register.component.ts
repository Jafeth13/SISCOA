import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesPeriodService } from '../services-period.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { ServiceUserService } from '../service-user.service';


@Component({
  selector: 'app-period-register',
  templateUrl: './period-register.component.html',
  styleUrls: ['./period-register.component.css'],
})
export class PeriodRegisterComponent implements OnInit {
  userData:any;
  date: any;
  hour: any;
  date2: any;
  hour2: any;
  startDate: any;
  enddate: any;
  @Input() period = {
    ID: 0,
    TC_Nombre: '',
    TF_FechaInicio: '',
    TF_FechaFin: '',
  };
  constructor(
    public restUser: ServiceUserService,
    public rest: ServicesPeriodService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }
  add() {
    let idU =  localStorage.getItem("idUsuario") ;


    this.rest.add(this.period,idU).subscribe(
      (result) => {
        Swal.fire('Buen trabajo!', 'Periodo registrado!', 'success');
        this.router.navigate(['/periodList']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al registrar el periodo!',
        });
      }
    );
  }
  
}
