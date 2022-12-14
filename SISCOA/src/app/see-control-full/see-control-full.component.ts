import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-see-control-full',
  templateUrl: './see-control-full.component.html',
  styleUrls: ['./see-control-full.component.css'],
})
export class SeeControlFullComponent implements OnInit {
  dataSource: any;

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  constructor(
    public rest: ServicesControllersService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService
  ) {}
  userData: any;

  ngOnInit(): void {
    this.rut();
  }

  rut() {
    let idU = localStorage.getItem('idUsuario');

    this.rest
      .getControlFull(this.route.snapshot.params['ID'], idU)
      .subscribe((pos) => {
        this.dataSource = pos;
      });
  }
}
