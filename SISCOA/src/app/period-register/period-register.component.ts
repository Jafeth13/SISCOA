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
    var date;
    date = new Date();
    date =  
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);
    
    this.startDate = this.date + 'T' + date+'Z';
    this.enddate = this.date2 + 'T' + date+'Z';
    let idU =  localStorage.getItem("idUsuario") ;

    this.period.TF_FechaInicio = this.startDate;
    this.period.TF_FechaFin = this.enddate;
    this.rest.add(this.period,idU).subscribe(
      (result) => {
        Swal.fire('Buen trabajo!', 'Periodo registrado!', 'success');
        this.router.navigate(['/periodList']);
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

  selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = moment(event.value).format('YYYY-MM-DD');
  }

  selectHour() {
    this.hour = (<HTMLInputElement>document.getElementById('time')).value;
  }
  selectDate2(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date2 = moment(event.value).format('YYYY-MM-DD');
  }

  selectHour2() {
    this.hour2 = (<HTMLInputElement>document.getElementById('time')).value;
  }
  

}
