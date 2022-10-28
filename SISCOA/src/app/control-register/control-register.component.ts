import { ServicesControllersService } from '../services-controllers.service';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceConditionService } from '../service-condition.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-control-register',
  templateUrl: './control-register.component.html',
  styleUrls: ['./control-register.component.css']
})
export class ControlRegisterComponent implements OnInit {

  constructor(public restControl:ServicesControllersService,public restPeriod:ServicesPeriodService,
   
    public restConditional:ServiceConditionService,private route:ActivatedRoute,private router:Router) { } 
    dataPeriod:any;
    dataConditional:any;
    @Input()controlData={
    
      
        ID: 0,
        TC_Nombre: "",
        TC_DescriptionDocumentacionEvidencia: "",
        TB_NotificacionCorreoAColaborador: true,
        FK_TN_Estado: 0,
        FK_TN_Periodo: 0,
        TSISCOA_Estado:null,
        TSISCOA_Periodo:null
      
  }
  ngOnInit(): void {
    this.restPeriod.periodList().subscribe((pos)=>{
      console.log(pos);
      this.dataPeriod=pos
      });
      this.restConditional.conditionalList().subscribe((pos)=>{
        console.log(pos);
        this.dataConditional=pos
        });
  }
temp:any
  add(){
    
  this.temp=this.controlData.TB_NotificacionCorreoAColaborador
if(this.temp=='no'){
  this.controlData.TB_NotificacionCorreoAColaborador=false
}else{
  if(this.temp=='si')
  this.controlData.TB_NotificacionCorreoAColaborador=true
}

    this.restControl.add(this.controlData).subscribe((result) => {
    
      Swal.fire(
        'Good job!',
        'User added sucessfully!',
        'success'
      )     
      this.router.navigate(['/listControl']);
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
