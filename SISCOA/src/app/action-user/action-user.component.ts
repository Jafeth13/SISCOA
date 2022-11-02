import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivityServicesService } from '../activity-services.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-action-user',
  templateUrl: './action-user.component.html',
  styleUrls: ['./action-user.component.css']
})
export class ActionUserComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['description','actionSys', 'date','user','action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  constructor(public rest:ActivityServicesService,private route:ActivatedRoute,private router:Router,public restUser:ServiceUserService) { }
userData:any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
ngOnInit(): void {
  this.rest.List(this.route.snapshot.params['ID']).subscribe((pos)=>{
    console.log(pos);
    this.dataSource.data=pos
    });

    
    this.restUser
    .get(this.route.snapshot.params['ID'],this.route.snapshot.params['ID'])
    .subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });

}
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }}
