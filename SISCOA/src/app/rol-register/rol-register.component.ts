import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';

@Component({
  selector: 'app-rol-register',
  templateUrl: './rol-register.component.html',
  styleUrls: ['./rol-register.component.css']
})
export class RolRegisterComponent implements OnInit {
 @Input()roleData= {
    "ID": 0,
    "TC_Nombre": "string",
    "TB_EstaActivo": true,
    "TB_EstaBorrado": true,
    "TC_UltimaModificacion": "string",
    "TF_UltimaFechaModificacion": "2022-10-08T17:34:42.103Z"
  }
  constructor(public rest:ServicesRolService,private route:ActivatedRoute,private router:Router) { }

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

   this.roleData.TF_UltimaFechaModificacion=date.toString();
   console.log(this.roleData);



    this.rest.add(this.roleData).subscribe((result) => {
    
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
