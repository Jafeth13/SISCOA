import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.css']
})


export class PeriodListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name','numOfDay','action'];
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
  numOfDay:number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen',numOfDay:2},
  { name: 'Hydrogen',numOfDay:2},  
  { name: 'Hydrogen',numOfDay:2},

];
