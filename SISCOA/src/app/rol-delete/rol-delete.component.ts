import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-rol-delete',
  templateUrl: './rol-delete.component.html',
  styleUrls: ['./rol-delete.component.css']
})
export class RolDeleteComponent implements OnInit {

 userData:any
  constructor(public rest:ServicesRolService,private route:ActivatedRoute,private router:Router,public restUser:ServiceUserService
    ) { }

  ngOnInit(): void {
this.rut();
  }
  roleDataDelete:any
  rut(){
    this.rest.get(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe((data: {}) => {
      console.log(data);
      this.roleDataDelete = data;
    });
    this.restUser
    .get(this.route.snapshot.params['IDS'],this.route.snapshot.params['IDS'])
    .subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });



  }
  back() {
    this.router.navigate(['/rolList/' + this.route.snapshot.params['IDS']]);
  }

  delete(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
  
        console.log(this.route.snapshot.params['ID'])
        this.rest.delete(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe(
        (data) =>{
          console.log(data);
          this.back();
        }
      ); 
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })   
  }
}
