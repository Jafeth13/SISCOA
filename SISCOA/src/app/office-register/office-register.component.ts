import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesOfficeService } from '../services-office.service';
import Swal from 'sweetalert2';
import { ServiceUserService } from '../service-user.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-office-register',
  templateUrl: './office-register.component.html',
  styleUrls: ['./office-register.component.css'],
})
export class OfficeRegisterComponent implements OnInit {
  errorMessage: any;
  userData:any
  @Input() officeData = {
    ID: 0,
    TC_CodigoOficina: '',
    TC_Nombre: '',
    TC_Institucion: '',
    TB_EstadoActividad: true,
  };

  constructor(
    private fb: FormBuilder,
    public rest: ServicesOfficeService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService

  ) {}

  ngOnInit(): void {
    this.rut();
    this.obtener_localStorage()
    this.getStatus();
   
  }

  add() {
    this.rest.add(this.officeData,this.userData.ID).subscribe(
      (result) => {
        this.router.navigate(['/officeList']);
        Swal.fire('Buen trabajo!', 'Oficina ingresada exitosamente!');
        this.router.navigate(['/officeList']);
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

  status: any;
  getStatus() {
    this.rest.getStatus(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      this.status = data;
    });
  }

  rut() {
    let idU =  localStorage.getItem("idUsuario") ;
    this.restUser.get(idU,idU).subscribe((data: {}) => {
      this.userData = data;
    });
  }

  obtener_localStorage(){
    let idU =  localStorage.getItem("idUsuario") ;
    this.userData.ID=idU
    }
}
