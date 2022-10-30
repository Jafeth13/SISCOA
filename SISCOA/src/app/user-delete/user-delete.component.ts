import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  userData:any
  userData2:any

  constructor(public restUser:ServiceUserService,public rest:ServicesRolService,public rest2:ServicesOfficeService,private route:ActivatedRoute,private router:Router) { }
  roleData:any;
  dataOffice:any;
  ngOnInit(): void {
    this.rest.rolList().subscribe((pos)=>{
      console.log(pos);
      this.roleData=pos
      });
  this.rut();
      this.get();
  }
  
  get(){
    this.dataOffice=[];
    this.rest2.officeList().subscribe((data={})=>{
      console.log(data);
      this.dataOffice=data
      });
  }
  rut(){
    this.restUser.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });
    this.restUser.get(this.route.snapshot.params['IDS']).subscribe((data: {}) => {
      console.log(data);
      this.userData2 = data;
    });
  }
  
  delete(){
    this.restUser.delete(this.route.snapshot.params['ID']).subscribe((result) => {
      Swal.fire(
        'Good job!',
        'User added sucessfully!',
        'success'
      )     
      this.router.navigate(['/listUser/'+this.userData2.ID]);    
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
