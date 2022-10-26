import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceConditionService } from '../service-condition.service';
@Component({
  selector: 'app-condition-register',
  templateUrl: './condition-register.component.html',
  styleUrls: ['./condition-register.component.css']
})

export class ConditionRegisterComponent implements OnInit {
  
  constructor(public rest:ServiceConditionService,private route:ActivatedRoute,private router:Router) { }

@Input()estado={ 
    "ID": 3,
    "TC_Nombre": "",
    "TB_EstaActivo": true,
    "TB_EstaBorrado": false,
    "TC_UltimaModificacion": "string",
    "TF_UltimaFechaModificacion": "",
    "Controls": null}

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

   this.estado.TF_UltimaFechaModificacion=date.toString();
   console.log(this.estado);



    this.rest.add(this.estado).subscribe((result) => {
    
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
