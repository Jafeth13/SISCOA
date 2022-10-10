import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesPeriodService } from '../services-period.service';
@Component({
  selector: 'app-period-update',
  templateUrl: './period-update.component.html',
  styleUrls: ['./period-update.component.css']
})
export class PeriodUpdateComponent implements OnInit {


  constructor(public rest:ServicesPeriodService,private route:ActivatedRoute,private router:Router) { }
  @Input()periodDataupdate:any

  

  ngOnInit(): void {
    this.rut();
  }
  rut(){
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.periodDataupdate = data;
    });
  }
  update(){
    this.rest.update(this.periodDataupdate,this.route.snapshot.params['ID']).subscribe((result) => {
   
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
      console.log(err);
    });
  }
}
