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
    this.rest.rolList(this.route.snapshot.params['IDS']).subscribe((pos)=>{
      console.log(pos);
      this.roleData=pos
      });
  this.rut();
      this.get();
  }
  
  get(){
    this.dataOffice=[];
    this.rest2.officeList(this.route.snapshot.params['IDS']).subscribe((data={})=>{
      console.log(data);
      this.dataOffice=data
      });
  }
  rut(){
    this.restUser.get(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });
    this.restUser.get(this.route.snapshot.params['IDS'],this.route.snapshot.params['IDS']).subscribe((data: {}) => {
      console.log(data);
      this.userData2 = data;
    });
  }
  

  }

