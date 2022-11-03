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
  constructor(
    public rest: ServicesControllersService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService 
  ) {}
userData:any;
  ngOnInit(): void {
    this.rut();
  }

  rut() {
    let idU =  localStorage.getItem("idUsuario") ;
    console.log(idU)
    this.restUser.get(idU,idU).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
      
    });


    this.rest.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
      console.log(data);
      this.controlDataDelete = data;
    });
   
  }

  delete() {
    let idU =  localStorage.getItem("idUsuario") ;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.route.snapshot.params['ID']);
        this.rest.delete(this.controlDataDelete.ID,idU).subscribe((data) => {
          console.log(data);
          this.ngOnInit();
          this.router.navigate(['/listControl']);
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
