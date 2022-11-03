import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-user-see',
  templateUrl: './user-see.component.html',
  styleUrls: ['./user-see.component.css']
})
export class UserSeeComponent implements OnInit {
  userData:any
  userData2:any
  constructor(public restUser:ServiceUserService,public rest:ServicesRolService,public rest2:ServicesOfficeService,private route:ActivatedRoute,private router:Router) { }
  roleData:any;
  dataOffice:any;
  ngOnInit(): void {
   
    this.rut();
    this.obtener_localStorage()
  }
  

  rut(){

    let idU =  localStorage.getItem("idUsuario") ;
    console.log(idU)
    this.restUser.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
      
    });
    this.rest.rolList(idU).subscribe((pos)=>{
      console.log(pos);
      this.roleData=pos
      });


    this.restUser.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });
    this.restUser.get(this.route.snapshot.params['IDS'],idU).subscribe((data: {}) => {
      console.log(data);
      this.userData2 = data;
    });

    this.dataOffice=[];
    this.rest2.officeList(idU).subscribe((data={})=>{
      console.log(data);
      this.dataOffice=data
      });
  }
  
  obtener_localStorage(){
    let idU =  localStorage.getItem("idUsuario") ;
    this.userData.ID=idU
    }

  }

