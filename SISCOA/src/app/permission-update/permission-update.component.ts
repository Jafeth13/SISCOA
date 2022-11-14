import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { PermisionServicesService } from '../permision-services.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-permission-update',
  templateUrl: './permission-update.component.html',
  styleUrls: ['./permission-update.component.css'],
})
export class PermissionUpdateComponent implements OnInit {
  userData: any;
  constructor(
    public rest: PermisionServicesService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService
  ) {}
  @Input() permisionDataupdate: any;

  ngOnInit(): void {
    this.rut();
  }
  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.rest
      .get(this.route.snapshot.params['ID'], idU)
      .subscribe((data: {}) => {
        this.permisionDataupdate = data;
      });
  }

  update() {
    let idU = localStorage.getItem('idUsuario');
    this.rest
      .update(this.permisionDataupdate, this.route.snapshot.params['ID'], idU)
      .subscribe(
        (result) => {
          Swal.fire('Buen trabajo!', 'Permiso actualizado!', 'success');
          this.router.navigate(['/permissionList']);
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

  valitation() {
    if (this.permisionDataupdate.TC_Nombre.length==0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error,rellena la informacion solicitada!',
      });
    }else{
     this.update();
    }
  }
}
