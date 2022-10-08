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
  @Input()officeData={id:0,TC_Nombre:'',TC_CodigoOficina:'',TC_Institucion:'',TB_EstadoActividad:false,TC_UltimaModificacion:'',TF_UltimaFechaModificacion:''	};
  
  constructor(private fb: FormBuilder,public rest:ServicesOfficeService,private route:ActivatedRoute,private router:Router) { 

  

  }

  ngOnInit(): void {
this.getStatus();
  }

  add() {
 this.officeData.TC_UltimaModificacion='Jafeth';
 this.officeData.TF_UltimaFechaModificacion='10-07T11:54:45.350';
this.officeData.TB_EstadoActividad=true;
console.log(this.officeData);
    this.rest.add(this.officeData).subscribe((result) => {
      this.router.navigate(['/officeList']);
      Swal.fire(
        'Good job!',
        'Role added sucessfully!',
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

status:any;
  getStatus(){
    this.rest.getStatus().subscribe((data:{})=>{
      console.log(data);
      this.status=data;
    });}

}
