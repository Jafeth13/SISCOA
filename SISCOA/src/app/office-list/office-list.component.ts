import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
//OfficeListComponent
export class OfficeListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'code','status','institution', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}


export interface PeriodicElement {
  name: string;
  code: string;
  status: string;
  institution:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', code: 'Matamoros',status:'Cordero',institution:'Cartago'},
  { name: 'Hydrogen', code: 'Matamoros',status:'Cordero',institution:'Cartago'},
  { name: 'Hydrogen', code: 'Matamoros',status:'Cordero',institution:'Cartago'},
  { name: 'Hydrogen', code: 'Matamoros',status:'Cordero',institution:'Cartago'},
  { name: 'Hydrogen', code: 'Matamoros',status:'Cordero',institution:'Cartago'},
  { name: 'Hydrogen', code: 'Matamoros',status:'Cordero',institution:'Cartago'},
  { name: 'Hydrogen', code: 'Matamoros',status:'Cordero',institution:'Cartago'},
];
