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
  userData2:any;
  constructor(
    public restUser: ServiceUserService,
    public rest: ServicesRolService,
    public rest2: ServicesOfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  roleData: any;
  dataOffice: any;
  ngOnInit(): void {
    this.rut();
  }

 
  rut(){
    let idU =  localStorage.getItem("idUsuario") ;


   this.restUser.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
     this.userData = data;
   });

   this.rest2.officeList(idU).subscribe((data={})=>{
     this.dataOffice=data
     });

     this.rest.rolList(idU).subscribe((pos)=>{
       this.roleData=pos
       });
       this.dataOffice=[];
       this.rest2.officeList(idU).subscribe((data={})=>{
         this.dataOffice=data
         });
  
 }

  Update() {
    let idU =  localStorage.getItem("idUsuario") ;
    this.restUser
      .update(this.userData, this.route.snapshot.params['ID'],idU)
      .subscribe(
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
        }
      );
  }

  obtener_localStorage(){
    let idU =  localStorage.getItem("idUsuario") ;
    this.userData.ID=idU
    }

}
