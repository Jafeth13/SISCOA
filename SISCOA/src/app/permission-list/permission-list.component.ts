import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PermisionServicesService } from '../permision-services.service';
@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})


export class PermissionListComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['name','action'];
  dataSource = new MatTableDataSource();
  constructor(public rest:PermisionServicesService,private route:ActivatedRoute,private router:Router) { }

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  ngOnInit(): void {
    this.rest.permisionList().subscribe((pos)=>{
      console.log(pos);
      this.dataSource.data=pos
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}