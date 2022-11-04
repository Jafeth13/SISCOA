import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-period-delete',
  templateUrl: './period-delete.component.html',
  styleUrls: ['./period-delete.component.css']
})
export class PeriodDeleteComponent implements OnInit {


  constructor(public restUser:ServiceUserService,public rest:ServicesPeriodService,private route:ActivatedRoute,private router:Router) { }
  @Input()periodDataDelete:any
userData:any
  

  ngOnInit(): void {
    this.rut();
  }
  rut(){
    let idU =  localStorage.getItem("idUsuario") ;
    this.rest.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {
      this.periodDataDelete = data;
    });
    
    
    
  }
  delete(){
    let idU =  localStorage.getItem("idUsuario") ;

    this.rest.delete(this.route.snapshot.params['ID'],idU).subscribe((result) => {
      this.router.navigate(['/periodList']);

      Swal.fire(
        'Good job!',
        'estado sucessfully updated!',
        'success'
      )     
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }
}
