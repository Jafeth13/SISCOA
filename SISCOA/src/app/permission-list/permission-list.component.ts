import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PermisionServicesService } from '../permision-services.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})


export class PermissionListComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['name','action'];
  dataSource = new MatTableDataSource();
  userData:any
  constructor(public restUser:ServiceUserService,public rest:PermisionServicesService,private route:ActivatedRoute,private router:Router) { }

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  ngOnInit(): void {
    this.rest.permisionList(this.route.snapshot.params['ID']).subscribe((pos)=>{
      console.log(pos);
      this.dataSource.data=pos
      });
      this.rut();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }


  rut() {
    this.restUser
      .get(this.route.snapshot.params['ID'],this.route.snapshot.params['ID'])
      .subscribe((data: {}) => {
        console.log(data);
        this.userData = data;
      });
  }


}