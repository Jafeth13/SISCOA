import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PermisionServicesService } from '../permision-services.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-permission-register',
  templateUrl: './permission-register.component.html',
  styleUrls: ['./permission-register.component.css'],
})
export class PermissionRegisterComponent implements OnInit {
  @Input() permisionData = {
    ID: 0,
    TC_Nombre: '',
  };
  userData:any;
  constructor(
    public restUser:ServiceUserService,
    public rest: PermisionServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  add() {
    this.rest.add(this.permisionData).subscribe(
      (result) => {
        Swal.fire('Good job!', 'Estado added sucessfully!', 'success'); 
        this.router.navigate(['/permissionList/'+this.userData.ID]);   
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.log(err);
      }
    );
  }

  rut() {
    this.restUser
      .get(this.route.snapshot.params['ID'])
      .subscribe((data: {}) => {
        console.log(data);
        this.userData = data;
      });
  }
  back() {
    this.router.navigate(['/permissionList/' + this.route.snapshot.params['ID']]);
  }

}
