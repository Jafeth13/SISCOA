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
  selector: 'app-office-control-management',
  templateUrl: './office-control-management.component.html',
  styleUrls: ['./office-control-management.component.css'],
})
export class OfficeControlManagementComponent implements OnInit, AfterViewInit {
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
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.rest.officeList().subscribe((pos) => {
      console.log(pos);
      this.dataSource.data = pos;
    });

    this.restPeriodic.periodList().subscribe((pos) => {
      console.log(pos);
      this.dataSourcePeriod = pos;
    });

    this.restUser.get(this.route.snapshot.params['ID'],this.route.snapshot.params['ID']).subscribe((data) => {
      console.log(data);
    });
  }
  update(id: number) {
    this.rest2.getControlFull(id).subscribe((data: {}) => {
      console.log(data);
      this.controlDataupdate = data;
    });
  }
  office: any;
  dar(id: any, name: any) {
    this.office = id;
    this.rest2.getControl(this.office).subscribe((pos) => {
      console.log(pos);
      this.dataSourceControl.data = pos;
    });
    this.name.nameOff = name;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  back() {
    this.router.navigate(['/controlMenu/' + this.route.snapshot.params['ID']]);
  }

  selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = moment(event.value).format('YYYY-MM-DD');
  }

  selectHour() {
    this.hour = (<HTMLInputElement>document.getElementById('time')).value;
  }
  extraDay(){
    var date;
    date = new Date();
    date =  
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);
    
    this.startDate = this.date + 'T' + date+'Z';

    this.controlDataupdate.TF_FechaFin_DiasExtra = this.startDate;

    this.officeControl.update(this.controlDataupdate.ID,this.controlDataupdate).subscribe(
      (result) => {
        Swal.fire('Good job!', 'UPDATE sucessfully!', 'success'); 
        this.router.navigate(['/controlMenu/' + this.route.snapshot.params['ID']]);
      }
     
      ,
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.log(err);
      }
    );
    console.log(this.officeControl);

   }

}
