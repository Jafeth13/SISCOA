import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceConditionService } from '../service-condition.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-condition-delete',
  templateUrl: './condition-delete.component.html',
  styleUrls: ['./condition-delete.component.css']
})
export class ConditionDeleteComponent implements OnInit {
statusDataDelete:any;  
userData:any;
  constructor(public restUser:ServiceUserService,public rest:ServiceConditionService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
              this.rut();
  }
  
  rut(){
    this.rest.get(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe((data: {}) => {
      console.log(data);
      this.statusDataDelete = data;
    });
    this.restUser
    .get(this.route.snapshot.params['IDS'],this.route.snapshot.params['IDS'])
    .subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });
  }


  delete(){
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
        this.rest.delete(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe(
        (data) =>{
          console.log(data);
          this.router.navigate(['/conditionList/'+this.userData.ID]);
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
