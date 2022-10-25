import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesOfficeService } from '../services-office.service';
import { ServicesControllersService } from '../services-controllers.service';
import {AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-office-control-management',
  templateUrl: './office-control-management.component.html',
  styleUrls: ['./office-control-management.component.css']
})
export class OfficeControlManagementComponent implements OnInit,AfterViewInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  dataSource = new MatTableDataSource();
  dataSourceControl = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  displayedColumns: string[] = ['name', 'code','institution', 'action'];
  displayedxColumns: string[] = ['name', 'Descripcion','Period','status','notification', 'action'];
  controlDataupdate:any
  constructor(public rest:ServicesOfficeService,public rest2:ServicesControllersService,private route:ActivatedRoute,private router:Router,private _formBuilder: FormBuilder) { }

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
  update(id:number){
    this.rest2.get(id).subscribe((data: {}) => {
      console.log(data);
      this.controlDataupdate = data;
    });
}
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }}

  
