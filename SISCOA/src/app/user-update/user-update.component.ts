import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  @Input()userData:any
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
}

Update(){
 
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



  this.restUser.update(this.userData,this.route.snapshot.params['ID']).subscribe((result) => {
  
    Swal.fire(
      'Good job!',
      'User added sucessfully!',
      'success'
    )
    this.router.navigate(['/listUser']);         
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
