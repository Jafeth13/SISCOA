import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-office-delete',
  templateUrl: './office-delete.component.html',
  styleUrls: ['./office-delete.component.css'],
})
export class OfficeDeleteComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public rest: ServicesOfficeService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService

  ) {}
userData:any
  ngOnInit(): void {
    this.rut();
  }
  officeDataDelete: any;
  rut() {
    let idU =  localStorage.getItem("idUsuario") ;  
    this.rest.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
      this.officeDataDelete = data;
    });
    
  }

  delete() {
    let idU =  localStorage.getItem("idUsuario") ;

    Swal.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir esto.!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.rest.delete(this.route.snapshot.params['ID'],idU).subscribe((data) => {
          this.router.navigate(['/officeList']);
        });
        Swal.fire('Eliminado!', 'Oficina eliminada correctamente.', 'success');
      }
    });
  }

  obtener_localStorage(){
    let idU =  localStorage.getItem("idUsuario") ;
    this.userData.ID=idU
    }
}
