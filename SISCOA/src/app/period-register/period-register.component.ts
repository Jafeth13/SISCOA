import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesPeriodService } from '../services-period.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-period-register',
  templateUrl: './period-register.component.html',
  styleUrls: ['./period-register.component.css']
})
export class PeriodRegisterComponent implements OnInit {

  date:any;
  hour:any;
  date2:any;
  hour2:any;
  startDate:any
  enddate:any
  @Input()period={ 
    "ID": 3,
    "TC_Nombre": "",
    "TB_EstaActivo": true,
    "TB_EstaBorrado": false,
    "TC_UltimaModificacion": "string",
    "TF_UltimaFechaModificacion": "",
    "Controls": null}
    constructor(public rest:ServicesPeriodService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  add(){

    this.startDate=this.date+'T'+this.hour+':00.000Z';
    this.enddate=this.date2+'T'+this.hour2+':00.000Z';
   
    var date;
    date = new Date();
    date = date.getFullYear() + '-' +
        ('00' + (date.getMonth()+1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + 'T' + 
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);

   this.period.TF_UltimaFechaModificacion=date.toString();
   console.log(this.period);



    this.rest.add(this.period).subscribe((result) => {
    
      Swal.fire(
        'Good job!',
        'Estado added sucessfully!',
        'success'
      )     
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      console.log(err);
    });
 }

 selectDate(type: string, event: MatDatepickerInputEvent<Date>){
  this.date=moment(event.value).format('YYYY-MM-DD');
}

selectHour(){
  this.hour=(<HTMLInputElement> document.getElementById("time")).value;
  }
  selectDate2(type: string, event: MatDatepickerInputEvent<Date>){
    this.date2=moment(event.value).format('YYYY-MM-DD');
  }
  
  selectHour2(){
    this.hour2=(<HTMLInputElement> document.getElementById("time")).value;
    }



}
