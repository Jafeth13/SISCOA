import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServiceUserService } from '../service-user.service';
import { PermisionServicesService } from '../permision-services.service';
@Component({
  selector: 'app-rol-update',
  templateUrl: './rol-update.component.html',
  styleUrls: ['./rol-update.component.css']
})
export class RolUpdateComponent implements OnInit {
  @Input()roleDataupdate:any;
dataPermision:any;

@Input()rolPermisionU={
  
    ID: 0,
    FK_SISCOA_Rol_SISCOA_RolPermiso: 0,
    FK_SISCOA_Permiso_SISCOA_RolPermiso: 0,
    TSISCOA_Permiso:null,
    TSISCOA_Rol:null
    
  }


  constructor(public restPermision:PermisionServicesService,public rest:ServicesRolService,private route:ActivatedRoute,private router:Router,public restUser:ServiceUserService) { }
userData:any
  ngOnInit(): void {
    this.rut();
  }
  rut(){ 
    let idU =  localStorage.getItem("idUsuario") ;
    console.log(idU)
    this.restUser.get(idU,idU).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
      
    });

    this.rest.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
      console.log(data);
      this.roleDataupdate = data;
    });

   
    this.restPermision.permisionList(idU).subscribe((pos)=>{
      console.log(pos);
      this.dataPermision=pos
      });

  }
num:number=0;

  update(){
    let idU =  localStorage.getItem("idUsuario") ;

    console.log(this.num)
    this.rolPermisionU.FK_SISCOA_Permiso_SISCOA_RolPermiso=this.num;
    this.rolPermisionU.FK_SISCOA_Rol_SISCOA_RolPermiso= this.roleDataupdate.ID;
console.log(this.rolPermisionU)
    this.rest.rolPermision(this.rolPermisionU,idU).subscribe((result) => {
      
      Swal.fire(
        'Good job!',
        'role sucessfully updated!',
        'success'
      )
      this.router.navigate(['/rolList']);
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      console.log(err);
    });
  }

  back() {
    this.router.navigate(['/rolList']);
  }
  
}
