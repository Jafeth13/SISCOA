import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceConditionService } from '../service-condition.service';
@Component({
  selector: 'app-condition-register',
  templateUrl: './condition-register.component.html',
  styleUrls: ['./condition-register.component.css']
})
export class ConditionRegisterComponent implements OnInit {
  @Input()statusData={ID:0,TC_Nombre:'',TB_EstaActivo:true,TC_UltimaModificacion:'',TF_UltimaFechaModificacion:'',Controls:null};
  
  constructor(public rest:ServiceConditionService,private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
  }

  add(){
    this.statusData.TB_EstaActivo=true
    this.statusData.TC_UltimaModificacion='Jafeth';
    //=this.date+'T'+this.hour+':00.000Z'
    this.statusData.TF_UltimaFechaModificacion='2022-04-22T10:34:23:00.000Z'
   console.log(this.statusData);



    this.rest.add(this.statusData).subscribe((result) => {
    
      Swal.fire(
        'Good job!',
        'User added sucessfully!',
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
