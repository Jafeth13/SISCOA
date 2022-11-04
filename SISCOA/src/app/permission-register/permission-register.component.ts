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

  ngOnInit(): void {

  }

  add() {
    let idU =  localStorage.getItem("idUsuario") ;

    this.rest.add(this.permisionData,idU).subscribe(
      (result) => {
        Swal.fire('Good job!', 'Estado added sucessfully!', 'success'); 
        this.router.navigate(['/permissionList']);   
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }

  
  back() {
    this.router.navigate(['/permissionList']);
  }

}
