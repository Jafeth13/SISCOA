import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceConditionService } from '../service-condition.service';
@Component({
  selector: 'app-condition-update',
  templateUrl: './condition-update.component.html',
  styleUrls: ['./condition-update.component.css']
})
export class ConditionUpdateComponent implements OnInit {

  constructor(public rest:ServiceConditionService,private route:ActivatedRoute,private router:Router) { }
  @Input()statusDataupdate:any

  

  ngOnInit(): void {
    this.rut();
  }
  rut(){
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.statusDataupdate = data;
    });
  }
  update(){
    this.rest.update(this.statusDataupdate,this.route.snapshot.params['ID']).subscribe((result) => {
   
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
