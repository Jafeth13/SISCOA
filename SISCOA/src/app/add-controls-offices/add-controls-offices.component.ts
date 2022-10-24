
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesOfficeService } from '../services-office.service';
import { ServicesControllersService } from '../services-controllers.service';

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
      @ViewChild(MatPaginator) paginator :any = MatPaginator;
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

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }}
