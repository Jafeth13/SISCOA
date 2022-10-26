
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesOfficeService } from '../services-office.service';
import { ServicesControllersService } from '../services-controllers.service';
import { OfficeControlServicesService } from '../office-control-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-controls-offices',
  templateUrl: './add-controls-offices.component.html',
  styleUrls: ['./add-controls-offices.component.css']
})
export class AddControlsOfficesComponent implements OnInit,AfterViewInit {
   firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    displayedColumns: string[] = ['name', 'code','institution', 'action'];
    displayedxColumns: string[] = ['name', 'Descripcion','Period','status','notification', 'action'];

    dataSource = new MatTableDataSource();
    dataSourceControl = new MatTableDataSource();
    control:any;
    office:any;
      @ViewChild(MatPaginator) paginator :any = MatPaginator;
  constructor(public restOfficeControl:OfficeControlServicesService,public rest:ServicesOfficeService,public rest2:ServicesControllersService,private route:ActivatedRoute,private router:Router,private _formBuilder: FormBuilder) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.rest.officeList().subscribe((pos)=>{
      console.log(pos);
      this.dataSource.data=pos
      });
     this.rest2.officeList().subscribe((pos)=>{
        console.log(pos);
        this.dataSourceControl.data=pos
        });
  }

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  



officeControl={
  ID: 0,
  FK_SISCOA_CONTROL_SISCOA_OficinaControl: 0,
  FK_SISCOA_OFICINA_SISCOA_OficinaControl: 0,
  TB_EstaActivo: true,
  TB_EstaBorrado: true,
  TC_UltimaModificacion: "insertar",
  TF_UltimaFechaModificacion: "2022-10-26T03:39:07.984Z",
  Control:null,
  Oficina:null
}

darOfice(id:any){
  this.office=id;
  }

addControlOffice()
  {
    var date;
    date = new Date();
    date = date.getFullYear() + '-' +
        ('00' + (date.getMonth()+1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + 'T' + 
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);

   this.officeControl.TF_UltimaFechaModificacion=date.toString();
   console.log(this.officeControl);

   this.officeControl.FK_SISCOA_OFICINA_SISCOA_OficinaControl=this.office;
   this.officeControl.FK_SISCOA_CONTROL_SISCOA_OficinaControl=this.control;



    this.restOfficeControl.add(this.officeControl).subscribe((result) => {
    
      Swal.fire(
        'Good job!',
        'Estado added sucessfully!',
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
    console.log(this.officeControl);
  } 

   dar(id:any){
this.control=id;
this.addControlOffice();

  }
}
