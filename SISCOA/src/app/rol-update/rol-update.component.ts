import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServiceUserService } from '../service-user.service';
import { PermisionServicesService } from '../permision-services.service';
@Component({
  selector: 'app-rol-update',
  templateUrl: './rol-update.component.html',
  styleUrls: ['./rol-update.component.css'],
})
export class RolUpdateComponent implements OnInit {
  @Input() roleDataupdate: any;
  //variables
  dataPermision: any;
  userData: any;
  num: number = 0;
  @Input() rolPermisionU = {
    ID: 0,
    FK_SISCOA_Rol_SISCOA_RolPermiso: 0,
    FK_SISCOA_Permiso_SISCOA_RolPermiso: 0,
    TSISCOA_Permiso: null,
    TSISCOA_Rol: null,
  };
 

  constructor(
    public restPermision: PermisionServicesService,
    public rest: ServicesRolService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService
  ) {}
 
  ngOnInit(): void {
    this.rut();
  }
  rut() {
    let idU = localStorage.getItem('idUsuario');

    this.rest
      .get(this.route.snapshot.params['ID'], idU)
      .subscribe((data: {}) => {
        this.roleDataupdate = data;
      });

    this.restPermision.permisionList(idU).subscribe((pos) => {
      this.dataPermision = pos;
    });
  }


  update() {
    let idU = localStorage.getItem('idUsuario');

    this.rolPermisionU.FK_SISCOA_Permiso_SISCOA_RolPermiso = this.num;
    this.rolPermisionU.FK_SISCOA_Rol_SISCOA_RolPermiso = this.roleDataupdate.ID;
    this.rest.rolPermision(this.rolPermisionU, idU).subscribe(
      (result) => {
        Swal.fire('Buen trabajo!', 'El rol fue actualizado!', 'success');
        this.router.navigate(['/rolList']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }

  back() {
    this.router.navigate(['/rolList']);
  }
}
