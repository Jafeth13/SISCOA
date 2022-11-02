import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-extra-day',
  templateUrl: './extra-day.component.html',
  styleUrls: ['./extra-day.component.css']
})
export class ExtraDayComponent implements AfterViewInit ,OnInit{
  displayedColumns: string[] = ['name', 'Descripcion','Period','status','notification', 'action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  constructor(public rest:ServicesControllersService,private route:ActivatedRoute,private router:Router,public restUser:ServiceUserService) { }
  userData:any
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
   

      this.restUser.get(this.route.snapshot.params['ID'],this.route.snapshot.params['ID']).subscribe((data: {}) => {
        console.log(data);
        this.userData = data;
      });

 this.rest.getControlDayExtra().subscribe((pos)=>{
      console.log(pos);
      this.dataSource.data=pos
      });

     
  }



  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }}
