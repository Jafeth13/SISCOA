import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PermisionServicesService } from '../permision-services.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-permission-delete',
  templateUrl: './permission-delete.component.html',
  styleUrls: ['./permission-delete.component.css']
})
export class PermissionDeleteComponent implements OnInit {


  constructor(public rest:PermisionServicesService,private route:ActivatedRoute,private router:Router,public restUser:ServiceUserService,
    ) { }
  @Input()periodDataDelete:any

  
userData:any;
  ngOnInit(): void {
    this.rut();
  }
  rut(){
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.periodDataDelete = data;
    });

    this.restUser
    .get(this.route.snapshot.params['IDS'])
    .subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });

  }
  delete(){
    this.rest.delete(this.route.snapshot.params['ID']).subscribe((result) => {
   
      Swal.fire(
        'Good job!',
        'estado sucessfully updated!',
        'success'
      )     
      this.router.navigate(['/permissionList/'+this.userData.ID]);   

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
