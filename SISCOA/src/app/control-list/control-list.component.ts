import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-control-list',
  templateUrl: './control-list.component.html',
  styleUrls: ['./control-list.component.css']
})



export class ControlListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'Descripcion','Period','status','notification', 'action'];
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
  description: string;
  Period: string;
  status:string;
  notification:string;
  
 
}



const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Asistencia', description: 'Asistencia en la oficina',Period:'Octubre',status:'Asignado',notification:'si'},
  { name: 'Asistencia', description: 'Asistencia en la oficina',Period:'Octubre',status:'Asignado',notification:'si'},
  { name: 'Asistencia', description: 'Asistencia en la oficina',Period:'Octubre',status:'Asignado',notification:'si'},  
  { name: 'Asistencia', description: 'Asistencia en la oficina',Period:'Octubre',status:'Asignado',notification:'si'},
 

];


