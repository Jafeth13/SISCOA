import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-menu-control',
  templateUrl: './menu-control.component.html',
  styleUrls: ['./menu-control.component.css']
})
export class MenuControlComponent implements OnInit {

  constructor(public restUser:ServiceUserService,public rest:ServicesRolService,public rest2:ServicesOfficeService,private route:ActivatedRoute,private router:Router) { }
  userData:any;
  ngOnInit(): void {
    this.rut();
  }
  rut(){
    this.restUser.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });
  }
}
