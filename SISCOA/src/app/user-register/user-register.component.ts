import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';
import { id } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  @Input() userData = {
    ID: 0,
    TC_Identificacion: '',
    TC_Nombre: '',
    TC_PrimerApellido: '',
    TC_SegundoApellido: '',
    TV_Contrasenna: '',
    TC_Correo: '',
    FK_SISCOA_Oficina_SISCOA_Usuario: 0,
    FK_SISCOA_Rol_SISCOA_Usuario: 0,
    TSISCOA_Oficina: null,
    TSISCOA_Rol: null,
  };
  constructor(
    public restUser: ServiceUserService,
    public rest: ServicesRolService,
    public rest2: ServicesOfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  roleData: any;
  dataOffice: any;
  userDataLog:any
  ngOnInit(): void {

    this.rut();
    this.get();
  }

  

  add() {
    let idU =  localStorage.getItem("idUsuario") ;
    console.log(this.userData);
    this.restUser.add(this.userData,idU).subscribe(
      (result) => {
        Swal.fire('Good job!', 'User added sucessfully!', 'success');
        this.router.navigate(['/listUser']);
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
  rut(){
    let idU =  localStorage.getItem("idUsuario") ;
    console.log(idU)
    this.restUser.get(idU,idU).subscribe((data: {}) => {
      console.log(data);
      this.userDataLog = data;
      
    });
    this.rest2.officeList(idU).subscribe((data = {}) => {
      console.log(data);
      this.dataOffice = data;
    });
    this.rest.rolList(idU).subscribe((pos) => {
      console.log(pos);
      this.roleData = pos;
    });
  }

  get(){
    let idU =  localStorage.getItem("idUsuario") ;
    this.rest2.officeList(idU).subscribe((data = {}) => {
      console.log(data);
      this.dataOffice = data;
    });
  }


  obtener_localStorage(){
    let idU =  localStorage.getItem("idUsuario") ;
    }

}
