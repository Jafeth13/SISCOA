import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-natvar-oficinas',
  templateUrl: './natvar-oficinas.component.html',
  styleUrls: ['./natvar-oficinas.component.css']
})
export class NatvarOficinasComponent implements OnInit {
  role: String = '';
  userData: any = null;
  @Input() datos: any;
  email: any = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    public restUser: ServiceUserService
  ) {}

  ngOnInit(): void {
    this.rut();
    this.obtener_localStorage();
  }

  logout() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1700,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Salió con éxito!',
    });

    this.router.navigate(['/']);
    this.email;
    this.role = '';
    this.auth.logout();
    this.auth.user = undefined;
    let idU = localStorage.getItem('idUsuario');
    idU = '';
    let nombreUsuario = localStorage.getItem('nombreUsuario');
    nombreUsuario = '';
    let apellido = localStorage.getItem('apellido');
    apellido = '';
  }

  rut() {
    let idU = localStorage.getItem('idUsuario');
    let nameU = localStorage.getItem('nombreUsuario');
    let apellidoU = localStorage.getItem('apellido'); 
      this.email =
        nameU + ' ' + apellidoU;
  }

  obtener_localStorage() {
    let idU = localStorage.getItem('idUsuario');
  
  }
}
