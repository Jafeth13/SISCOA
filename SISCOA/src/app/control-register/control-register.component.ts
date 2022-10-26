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
        TC_Nombre: "DFHG",
        TC_DescriptionDocumentacionEvidencia: "DGF",
        TB_NotificacionCorreoAColaborador: true,
        TB_EstaActivo: true,
        TB_EstaBorrado: true,
        TC_UltimaModificacion: "string",
        TF_UltimaFechaModificacion: "2022-10-26T03:39:07.926Z",
        FK_TN_Estado: 2,
        FK_TN_Periodo: 13,
        TSISCOA_Estado:{ID:0},
        TSISCOA_Periodo:{ID:0}
      
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

  add(){
    var date;
    date = new Date();
    date = date.getFullYear() + '-' +
        ('00' + (date.getMonth()+1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + 'T' + 
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);

   this.controlData.TF_UltimaFechaModificacion=date.toString();
   console.log(this.controlData);

    this.restControl.add(this.controlData).subscribe((result) => {
    
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
