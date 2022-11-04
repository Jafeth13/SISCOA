import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-control-see',
  templateUrl: './control-see.component.html',
  styleUrls: ['./control-see.component.css'],
})
export class ControlSeeComponent implements OnInit {
  @Input() controlData: any;
  userData: any;
  constructor(
    public rest: ServicesControllersService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService
  ) {}

  ngOnInit(): void {
    this.rut();
  }

  rut() {

    let idU = localStorage.getItem('idUsuario');
    this.rest.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
      this.controlData = data;
    });
  }
}
