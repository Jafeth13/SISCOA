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
    let idU =  localStorage.getItem("idUsuario") ;
    
    this.rest.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
      this.periodDataDelete = data;
    });
  }
  delete(){
    let idU =  localStorage.getItem("idUsuario") ;

    this.rest.delete(idU).subscribe((result) => {
   
      Swal.fire(
        'Good job!',
        'estado sucessfully updated!',
        'success'
      )     
      this.router.navigate(['/permissionList']);   

    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }
}
