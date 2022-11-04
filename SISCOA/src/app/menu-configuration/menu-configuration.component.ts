import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-menu-configuration',
  templateUrl: './menu-configuration.component.html',
  styleUrls: ['./menu-configuration.component.css'],
})
export class MenuConfigurationComponent implements OnInit {
  userData: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    public restUser: ServiceUserService
  ) {
    this.rut();
  }
  ngOnInit(): void {
    this.rut();
  }
  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.restUser.get(idU, idU).subscribe((data: {}) => {
      this.userData = data;
    });
  }

  obtener_localStorage() {
    let idU = localStorage.getItem('idUsuario');
    this.userData.ID = idU;
  }
}
