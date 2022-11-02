import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import {AfterViewInit, ViewChild} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    role: String = '';
userData:any=null;
    @Input() datos:any

       
     email: any = ''
  constructor(private route:ActivatedRoute,private router:Router,public auth:AuthService,public restUser: ServiceUserService   ) { }

  ngOnInit(): void {
   // if(this.auth.getStorageRole()!=undefined){
     // this.email = this.auth.getStorageRole().sub;
   //  this.email

    //}
  this.rut();
    this.obtener_localStorage()
     console.log('aquiiii')
     console.log(this.email)
  }
  
  logout(){

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1700,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed out successfully'
    })


    this.router.navigate(['/']);
    this.email 
    this.role = ''  
    this.auth.logout();
    this.auth.user = undefined;
    let idU =  localStorage.getItem("idUsuario") ;
    idU='';
  }

  rut(){
    let idU =  localStorage.getItem("idUsuario") ;
    console.log(idU)
    this.restUser.get(idU,idU).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
      
      this.email=this.userData.TC_Nombre+' '+this.userData.TC_PrimerApellido;
    });
   /* this.restUser.get(this.route.snapshot.params['ID'],this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
      console.log(this.route.snapshot.params['ID'])
      this.email=this.userData.TC_Nombre+' '+this.userData.TC_PrimerApellido;
    });*/
  }

  obtener_localStorage(){
    let idU =  localStorage.getItem("idUsuario") ;
    this.userData.ID=idU
    }
    
}
