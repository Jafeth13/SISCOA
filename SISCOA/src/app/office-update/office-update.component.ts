import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesOfficeService } from '../services-office.service';
import Swal from 'sweetalert2';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-office-update',
  templateUrl: './office-update.component.html',
  styleUrls: ['./office-update.component.css'],
})

export class OfficeUpdateComponent implements OnInit {

  constructor(
    public restUser: ServiceUserService,
    private fb: FormBuilder,
    public rest: ServicesOfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
userData:any
  ngOnInit(): void {
    this.rut();
  }
  @Input() officeDataupdate: any;
  rut() {
    let idU =  localStorage.getItem("idUsuario") ;
    this.rest.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
    this.officeDataupdate = data;
    });
  }

  update() {
    let idU =  localStorage.getItem("idUsuario") ;

    this.rest
      .update(this.officeDataupdate, this.route.snapshot.params['ID'],idU)
      .subscribe(
        (result) => {
          Swal.fire('Buen trabajo!', 'Oficina actualizada!', 'success');
          this.router.navigate(['/officeList']);
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al actualizar oficina!',
          });
        }
      );
  }
  
  errorL: any;
  valitation() {
    if (this.officeDataupdate.TC_Nombre.length==0||this.officeDataupdate.TC_Institucion==0||this.officeDataupdate.TC_CodigoOficina==0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al actualizar oficina!',
      });
    }else{
     this.update();
    }
  }



}
