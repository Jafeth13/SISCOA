import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PermisionServicesService } from '../permision-services.service';
@Component({
  selector: 'app-permission-delete',
  templateUrl: './permission-delete.component.html',
  styleUrls: ['./permission-delete.component.css']
})
export class PermissionDeleteComponent implements OnInit {


  constructor(public rest:PermisionServicesService,private route:ActivatedRoute,private router:Router) { }
  @Input()periodDataDelete:any

  

  ngOnInit(): void {
    this.rut();
  }
  rut(){
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.periodDataDelete = data;
    });
  }
  delete(){
    this.rest.delete(this.route.snapshot.params['ID']).subscribe((result) => {
   
      Swal.fire(
        'Good job!',
        'estado sucessfully updated!',
        'success'
      )     
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
