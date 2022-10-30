import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-rol-update',
  templateUrl: './rol-update.component.html',
  styleUrls: ['./rol-update.component.css']
})
export class RolUpdateComponent implements OnInit {
  @Input()roleDataupdate:any;

  constructor(public rest:ServicesRolService,private route:ActivatedRoute,private router:Router,public restUser:ServiceUserService) { }
userData:any
  ngOnInit(): void {
    this.rut();
  }
  rut(){
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.roleDataupdate = data;
    });

    this.restUser
    .get(this.route.snapshot.params['IDS'])
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
      this.router.navigate(['/rolList/' + this.route.snapshot.params['IDS']]);
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      console.log(err);
    });
  }

  back() {
    this.router.navigate(['/rolList/' + this.route.snapshot.params['IDS']]);
  }
  
}
