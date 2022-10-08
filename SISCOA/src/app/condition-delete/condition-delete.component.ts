import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceConditionService } from '../service-condition.service';

@Component({
  selector: 'app-condition-delete',
  templateUrl: './condition-delete.component.html',
  styleUrls: ['./condition-delete.component.css']
})
export class ConditionDeleteComponent implements OnInit {

  constructor(public rest:ServiceConditionService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
this.rut();
  }
  statusDataDelete:any
  rut(){
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.statusDataDelete = data;
    });
  }


  del(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
  
        console.log(this.route.snapshot.params['ID'])
        this.rest.delete(this.route.snapshot.params['ID']).subscribe(
        (data) =>{
          console.log(data);
          this.ngOnInit();
        }
      ); 
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })   
  }
}
