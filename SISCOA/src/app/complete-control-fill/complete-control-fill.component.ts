import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesControllersService } from '../services-controllers.service';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceConditionService } from '../service-condition.service';
@Component({
  selector: 'app-complete-control-fill',
  templateUrl: './complete-control-fill.component.html',
  styleUrls: ['./complete-control-fill.component.css']
})
export class CompleteControlFillComponent implements OnInit {
  dataPeriod:any;
  dataConditional:any;
  @Input()controlDataDelete:any
  constructor(public restControl:ServicesControllersService,public restPeriod:ServicesPeriodService,
   
    public restConditional:ServiceConditionService,private route:ActivatedRoute,private router:Router) { } 
  ngOnInit(): void {
    this.rut();
    this.restPeriod.periodList().subscribe((pos)=>{
      console.log(pos);
      this.dataPeriod=pos
      });
      this.restConditional.conditionalList().subscribe((pos)=>{
        console.log(pos);
        this.dataConditional=pos
        });
  }

  rut(){
    this.restControl.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.controlDataDelete = data;
    });
  }
/*
update(){

      console.log(this.route.snapshot.params['ID'])
      this.restControl.update(this.route.snapshot.params['ID'],this.controlDataDelete).subscribe(
      (data) =>{
        

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
}*/
}


