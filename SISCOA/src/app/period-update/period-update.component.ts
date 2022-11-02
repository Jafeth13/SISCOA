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
  date: any;
  hour: any;
  date2: any;
  hour2: any;
  startDate: any;
  enddate: any;
  userData:any
  constructor(
    public restUser: ServiceUserService,
    public rest: ServicesPeriodService,
    private route: ActivatedRoute,
    private router: Router
      ) {}
  @Input() periodDataupdate: any;

  ngOnInit(): void {
    this.rut();
  }
  rut() {
    this.rest.get(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe((data: {}) => {
      console.log(data);
      this.periodDataupdate = data;
    });
    this.restUser
      .get(this.route.snapshot.params['IDS'],this.route.snapshot.params['IDS'])
      .subscribe((data: {}) => {
        console.log(data);
        this.userData = data;
      });
  }
  update() {
    var date;
    date = new Date();
    date =
      ('00' + date.getHours()).slice(-2) +
      ':' +
      ('00' + date.getMinutes()).slice(-2) +
      ':' +
      ('00' + date.getSeconds()).slice(-2);

    this.startDate = this.date + 'T' + date + 'Z';
    this.enddate = this.date2 + 'T' + date + 'Z';
    console.log(this.periodDataupdate);

    this.periodDataupdate.TF_FechaInicio = this.startDate;
    this.periodDataupdate.TF_FechaFin = this.enddate;

    this.rest
      .update(this.periodDataupdate, this.route.snapshot.params['ID'],this.route.snapshot.params['IDS'])
      .subscribe(
        (result) => {
          Swal.fire('Good job!', 'estado sucessfully updated!', 'success');
          this.router.navigate(['/periodList/'+this.userData.ID]);

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
