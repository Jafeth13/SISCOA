import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceConditionService } from '../service-condition.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-condition-register',
  templateUrl: './condition-register.component.html',
  styleUrls: ['./condition-register.component.css']
})

export class ConditionRegisterComponent implements OnInit {
  
  constructor(public restUser:ServiceUserService,public rest:ServiceConditionService,private route:ActivatedRoute,private router:Router) { }

@Input()estado={ 
    "ID": 0,
    "TC_Nombre": ""}

  ngOnInit(): void {
    this.rut();
  }
userData:any;
  add(){
    let idU =  localStorage.getItem("idUsuario") ;

    this.rest.add(this.estado,idU).subscribe((result) => {
      Swal.fire(
        'Good job!',
        'Estado added sucessfully!',
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

 rut() {
  let idU =  localStorage.getItem("idUsuario") ;
  console.log(idU)
  this.restUser.get(idU,idU).subscribe((data: {}) => {
    console.log(data);
    this.userData = data;
    
  });
}

}
