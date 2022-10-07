import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceConditionService } from '../service-condition.service';

@Component({
  selector: 'app-condition-list',
  templateUrl: './condition-list.component.html',
  styleUrls: ['./condition-list.component.css']
})

export class ConditionListComponent implements AfterViewInit {
  conditionalList:any
  displayedColumns: string[] = ['name','action'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  constructor(public rest:ServiceConditionService,private route:ActivatedRoute,private router:Router) { }
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }


  getParking(){
   
    this.rest.conditionalList().subscribe((data:{})=>{
      console.log(data);
      this.conditionalList=data;
    });
   }


}


export interface PeriodicElement {
  name: string;
 
}


const ELEMENT_DATA: any[] = [
  { name: 'Hydrogen'},
  { name: 'Hydrogen'},  
  { name: 'Hydrogen'},
  { name: 'Hydrogen'},
  { name: 'Hydrogen'},

];

