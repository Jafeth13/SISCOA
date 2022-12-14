import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesRolService } from '../services-rol.service';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-user-see',
  templateUrl: './user-see.component.html',
  styleUrls: ['./user-see.component.css'],
})
export class UserSeeComponent implements OnInit {
  userData: any;
  constructor(
    public restUser: ServiceUserService,
    public restRol: ServicesRolService,
    public restOffice: ServicesOfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  roleData: any;
  dataOffice: any;
  ngOnInit(): void {
    this.rut();
  }

  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.restUser
      .get(this.route.snapshot.params['ID'], idU)
      .subscribe((data: {}) => {
        this.userData = data;
      });
    this.restRol.rolList(idU).subscribe((pos) => {
      this.roleData = pos;
    });

    this.dataOffice = [];
    this.restOffice.officeList(idU).subscribe((data = {}) => {
      this.dataOffice = data;
    });
  }


}
