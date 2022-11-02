import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-rol-see',
  templateUrl: './rol-see.component.html',
  styleUrls: ['./rol-see.component.css'],
})
export class RolSeeComponent implements OnInit {
  constructor(
    public rest: ServicesRolService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser:ServiceUserService
  ) {}
userData:any
  ngOnInit(): void {
    this.rut();
  }
  roleDataDelete: any;
  rut() {
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
  
}
