import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesOfficeService } from '../services-office.service';
import { ServicesControllersService } from '../services-controllers.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceUserService } from '../service-user.service';
import * as moment from 'moment';
import { OfficeControlServicesService } from '../office-control-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-office-managment-sup',
  templateUrl: './office-managment-sup.component.html',
  styleUrls: ['./office-managment-sup.component.css']
})
export class OfficeManagmentSupComponent implements OnInit, AfterViewInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  date: any;
  hour: any;
  date2: any;
  hour2: any;
  startDate: any;
  enddate: any;
  dataSource = new MatTableDataSource();
  dataSourceControl = new MatTableDataSource();
  dataSourcePeriod: any;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  displayedColumns: string[] = ['name', 'code', 'institution', 'action'];
  displayedxColumns: string[] = [
    'name',
    'Descripcion',
    'Period',
    'status',
    'notification',
    'action',
  ];
  controlDataupdate: any;
  name = {
    nameOff: '',
    indication: 'Controles',
  };

  constructor(
    public restUser: ServiceUserService,
    public restPeriodic: ServicesPeriodService,
    public rest: ServicesOfficeService,
    public rest2: ServicesControllersService,
    private route: ActivatedRoute,
    private router: Router,
    private _formBuilder: FormBuilder,
    public officeControl:OfficeControlServicesService
  ) {}

  ngAfterViewInit() {
    this.dataSourceControl.paginator = this.paginator;

    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
   this.rut();
  }
  update(id: number) {
    let idU =  localStorage.getItem("idUsuario") ;

    this.rest2.getControlFull(id,idU).subscribe((data: {}) => {
      console.log(data);
      this.controlDataupdate = data;
    });
  }
  office: any;
  dar(id: any, name: any) {
    let idU =  localStorage.getItem("idUsuario") ;

    this.office = id;
    this.rest2.getControl(this.office,idU).subscribe((pos) => {
      console.log(pos);
      this.dataSourceControl.data = pos;
    });
    this.name.nameOff = name;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter2(event: Event) {
    const filterValue2 = (event.target as HTMLInputElement).value;
    this.dataSourceControl.filter = filterValue2.trim().toLowerCase();
  }
  back() {
    this.router.navigate(['/controlMenuSup']);
  }

  selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = moment(event.value).format('YYYY-MM-DD');
  }

  selectHour() {
    this.hour = (<HTMLInputElement>document.getElementById('time')).value;
  }
  extraDay(){
    let idU =  localStorage.getItem("idUsuario") ;

    var date;
    date = new Date();
    date =  
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);
    
    this.startDate = this.date + 'T' + date+'Z';

    this.controlDataupdate.TF_FechaFin_DiasExtra = this.startDate;

    this.officeControl.update(this.controlDataupdate.ID,this.controlDataupdate,idU).subscribe(
      (result) => {
        Swal.fire('Good job!', 'UPDATE sucessfully!', 'success'); 
        this.router.navigate(['/controlMenu']);
      }
     
      ,
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });   
      }
    );
   }


   rut(){
    let idU =  localStorage.getItem("idUsuario") ;
    
    this.rest.officeList(idU).subscribe((pos) => {
      this.dataSource.data = pos;
    });

    this.restPeriodic.periodList(idU).subscribe((pos) => {
      this.dataSourcePeriod = pos;
    });

    
   }

}
