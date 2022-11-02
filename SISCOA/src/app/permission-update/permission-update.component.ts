import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { PermisionServicesService } from '../permision-services.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-permission-update',
  templateUrl: './permission-update.component.html',
  styleUrls: ['./permission-update.component.css']
})
export class PermissionUpdateComponent implements OnInit {
userData:any;
  constructor(public rest:PermisionServicesService,private route:ActivatedRoute,private router:Router,public restUser:ServiceUserService,
    ) { }
  @Input()roleDataupdate:any;

  ngOnInit(): void {
    this.rut();
  }
  rut(){
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.roleDataupdate = data;
    });  
    
    this.restUser
      .get(this.route.snapshot.params['IDS'],this.route.snapshot.params['IDS'])
      .subscribe((data: {}) => {
        console.log(data);
        this.userData = data;
      });
  }

  update(){
    this.rest.update(this.roleDataupdate,this.route.snapshot.params['ID']).subscribe((result) => {
      
      Swal.fire(
        'Good job!',
        'role sucessfully updated!',
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
