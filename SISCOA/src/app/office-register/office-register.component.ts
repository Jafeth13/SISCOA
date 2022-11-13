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
  userData:any;
  officeForm: FormGroup;
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

  ) {
    this.officeForm = this.fb.group({
      TC_Institucion: ['', [Validators.required]],
      TC_CodigoOficina: ['', [Validators.required]],
      TC_Nombre: ['', [Validators.required]],
      TB_EstadoActividad: true,
    });
  }

  ngOnInit(): void {
   
   
  }

  add() {
    let idU =  localStorage.getItem("idUsuario") ;
    console.log(this.officeForm.value)
    this.rest.add(this.officeForm.value,idU).subscribe(
      (result) => {
        this.router.navigate(['/officeList']);
        Swal.fire('Buen trabajo!', 'Oficina ingresada exitosamente!','success');
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

  
  

 


}
