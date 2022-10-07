import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesOfficeService } from '../services-office.service';
@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
//OfficeListComponent
export class OfficeListComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['name', 'code','status','institution', 'action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  constructor(public rest:ServicesOfficeService,private route:ActivatedRoute,private router:Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
ngOnInit(): void {
  this.rest.officeList().subscribe((pos)=>{
    console.log(pos);
    this.dataSource.data=pos
    });
}
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }}