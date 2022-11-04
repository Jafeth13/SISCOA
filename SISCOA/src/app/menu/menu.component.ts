import { ServiceUserService } from '../service-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    public restUser: ServiceUserService
  ) {
    this.rut();
  }
  userData: any;
  ngOnInit(): void {
    this.rut();
    this.obtener_localStorage()


  }
  rut() {
    let idU =  localStorage.getItem("idUsuario") ;
    this.restUser
      .get(idU,idU)
      .subscribe((data: {}) => {
        this.userData = data;
      });
  }


  obtener_localStorage(){
    let idU =  localStorage.getItem("idUsuario") ;
    this.userData.ID=idU
    }
}
