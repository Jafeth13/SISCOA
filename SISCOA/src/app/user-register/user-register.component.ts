import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  @Input()userData={
    
      ID: 0,
      TC_Identificacion: "",
      TC_Nombre: "",
      TC_PrimerApellido: "",
      TC_SegundoApellido: "",
      TV_Contrasenna: "",
      TC_Correo: "",
      FK_SISCOA_Oficina_SISCOA_Usuario:0 ,
      FK_SISCOA_Rol_SISCOA_Usuario: 0,
      TB_EstaActivo: true,
      TB_EstaBorrado: true,
      TC_UltimaModificacion: "insertar usuario",
      TF_UltimaFechaModificacion: "2022-10-25T19:12:50.014Z",
      TSISCOA_Oficina:null,
      TSISCOA_Rol:null
  }
  constructor(public restUser:ServiceUserService,public rest:ServicesRolService,public rest2:ServicesOfficeService,private route:ActivatedRoute,private router:Router) { }
  roleData:any;
  dataOffice:any;
  ngOnInit(): void {
    this.rest.rolList().subscribe((pos)=>{
      console.log(pos);
      this.roleData=pos
      });

      this.get();
  }

  get(){
    this.dataOffice=[];
    this.rest2.officeList().subscribe((data={})=>{
      console.log(data);
      this.dataOffice=data
      });
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

   this.userData.TF_UltimaFechaModificacion=date.toString();
   console.log(this.userData);



    this.restUser.add(this.userData).subscribe((result) => {
    
      Swal.fire(
        'Good job!',
        'User added sucessfully!',
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
