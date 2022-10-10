import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesPeriodService } from '../services-period.service';

@Component({
  selector: 'app-period-register',
  templateUrl: './period-register.component.html',
  styleUrls: ['./period-register.component.css']
})
export class PeriodRegisterComponent implements OnInit {
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
}
