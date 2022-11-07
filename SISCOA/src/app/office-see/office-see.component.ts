import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-office-see',
  templateUrl: './office-see.component.html',
  styleUrls: ['./office-see.component.css'],
})
export class OfficeSeeComponent implements OnInit {
  userData: any;
  constructor(
    private fb: FormBuilder,
    public rest: ServicesOfficeService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService
  ) {}

  ngOnInit(): void {
    this.rut();
    this.obtener_localStorage();
  }
  officeDataDelete: any;
  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.rest
      .get(this.route.snapshot.params['ID'], idU)
      .subscribe((data: {}) => {
        this.officeDataDelete = data;
      });
  }

  obtener_localStorage() {
    let idU = localStorage.getItem('idUsuario');
    this.userData.ID = idU;
  }
}
