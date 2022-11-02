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
    this.getStatus();
    this.rut();
  }

  add() {
    console.log(this.officeData);
    this.rest.add(this.officeData).subscribe(
      (result) => {
        this.router.navigate(['/officeList']);
        Swal.fire('Good job!', 'Role added sucessfully!', 'success');
        this.router.navigate(['/officeList/'+this.userData.ID]);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.log(err);
      }
    );
  }

  status: any;
  getStatus() {
    this.rest.getStatus().subscribe((data: {}) => {
      console.log(data);
      this.status = data;
    });
  }

  rut() {
    this.restUser
      .get(this.route.snapshot.params['ID'],this.route.snapshot.params['ID'])
      .subscribe((data: {}) => {
        console.log(data);
        this.userData = data;
      });
  }
}
