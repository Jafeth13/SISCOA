import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesOfficeService } from '../services-office.service';
import Swal from 'sweetalert2';
import { getLocaleDateFormat } from '@angular/common';


@Component({
  selector: 'app-office-register',
  templateUrl: './office-register.component.html',
  styleUrls: ['./office-register.component.css']
})
export class OfficeRegisterComponent implements OnInit {
  errorMessage: any;
  @Input()officeData={
    "ID": 0,
    "TC_CodigoOficina": "",
    "TC_Nombre": "",
    "TC_Institucion": "",
    "TB_EstadoActividad": true,
    "TB_EstaActivo": true,
    "TB_EstaBorrado": true,
    "TC_UltimaModificacion": "string",
    "TF_UltimaFechaModificacion": ""
  }
  
  constructor(private fb: FormBuilder,public rest:ServicesOfficeService,private route:ActivatedRoute,private router:Router) { 

  

  }

  ngOnInit(): void {
this.getStatus();
  }

  add() {
   
    var date;
    date = new Date();
    date = date.getFullYear() + '-' +
        ('00' + (date.getMonth()+1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + 'T' + 
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);

 this.officeData.TC_UltimaModificacion='Jafeth';
 this.officeData.TF_UltimaFechaModificacion=date;
this.officeData.TB_EstadoActividad=true;
console.log(this.officeData);
    this.rest.add(this.officeData).subscribe((result) => {
      this.router.navigate(['/officeList']);
      Swal.fire(
        'Good job!',
        'Role added sucessfully!',
        'success'
      ) 
      this.router.navigate(['/officeList']);    
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      console.log(err);
    });
  }

status:any;
  getStatus(){
    this.rest.getStatus().subscribe((data:{})=>{
      console.log(data);
      this.status=data;
    });}

}
