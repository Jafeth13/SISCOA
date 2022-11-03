import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceConditionService } from '../service-condition.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-condition-update',
  templateUrl: './condition-update.component.html',
  styleUrls: ['./condition-update.component.css']
})
export class ConditionUpdateComponent implements OnInit {

  constructor(public restUser:ServiceUserService,public rest:ServiceConditionService,private route:ActivatedRoute,private router:Router) { }
  @Input()statusDataupdate:any
userData:any;
  

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
      this.statusDataupdate = data;
    });
   

  }
  update(){

    let idU =  localStorage.getItem("idUsuario") ;
    this.rest.update(this.statusDataupdate,this.route.snapshot.params['ID'],idU).subscribe((result) => {
   
      Swal.fire(
        'Good job!',
        'estado sucessfully updated!',
        'success'
      ) 
      this.router.navigate(['/conditionList']);    
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
