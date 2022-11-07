import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-control-delete',
  templateUrl: './control-delete.component.html',
  styleUrls: ['./control-delete.component.css'],
})
export class ControlDeleteComponent implements OnInit {
  @Input() controlDataDelete: any;
  userData:any;
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
    let idU =  localStorage.getItem("idUsuario") ;
    this.rest.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
      this.controlDataDelete = data;
    });
   
  }

  delete() {
    let idU =  localStorage.getItem("idUsuario") ;

    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, hazlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.rest.delete(this.controlDataDelete.ID,idU).subscribe((data) => {
          this.ngOnInit();
          this.router.navigate(['/listControl']);
        });
        Swal.fire('Elimomado!', 'El archivo a sido eliminado.', 'success');
      }
    });
  }
}
