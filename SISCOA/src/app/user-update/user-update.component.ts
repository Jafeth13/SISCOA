import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  @Input() userData: any;
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
    let idU = localStorage.getItem("idUsuario");

    this.restUser.get(this.route.snapshot.params['ID'], idU).subscribe((data: {}) => {
      this.userData = data;
    });

    this.restRol.rolList(idU).subscribe((pos) => {
      this.roleData = pos
    });
    this.dataOffice = [];
    this.restOffice.officeList(idU).subscribe((data = {}) => {
      this.dataOffice = data
    });
  }

  Update() {
    let idU = localStorage.getItem("idUsuario");
    this.restUser
      .update(this.userData, this.route.snapshot.params['ID'], idU)
      .subscribe(
        (result) => {
          Swal.fire('Buen trabajo!', 'El usuario fue actualizado!', 'success');
          this.router.navigate(['/listUser']);
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al actualizar!',
          });
        }
      );
  }

  obtener_localStorage() {
    let idU = localStorage.getItem("idUsuario");

  }

  valitation() {
    this.userData.TSISCOA_Oficina = null,
      this.userData.TSISCOA_Rol = null
    if (this.userData.TC_Nombre.length == 0 || this.userData.TC_PrimerApellido.length == 0
      || this.userData.TC_SegundoApellido.length == 0 || this.userData.TC_Correo.length == 0 ||
      this.userData.TV_Contrasenna.length == 0 || this.userData.FK_SISCOA_Rol_SISCOA_Usuario.length == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al actualizar el usuario!',
      });
    } else {
      this.Update();
    }
  }

}
