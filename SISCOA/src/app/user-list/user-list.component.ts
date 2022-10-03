import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit {
  displayedColumns: string[] = ['Identificacion', 'name', 'Surname','secondSurname','ofice','role', 'action'];
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
  Identificacion: number;
  Surname: string;
  secondSurname:string;
  ofice:string;
  role:string;
 
}


const ELEMENT_DATA: PeriodicElement[] = [
  {Identificacion: 1, name: 'Hydrogen', Surname: 'Matamoros',secondSurname:'Cordero',ofice:'Cartago',role:'admin'},
  {Identificacion: 1, name: 'Hydrogen', Surname: 'Matamoros',secondSurname:'Cordero',ofice:'Cartago',role:'admin'},
  {Identificacion: 1, name: 'Hydrogen', Surname: 'juarez',secondSurname:'Cordero',ofice:'Cartago',role:'admin'},
  {Identificacion: 1, name: 'Hydrogen', Surname: 'Matamoros',secondSurname:'Cordero',ofice:'Cartago',role:'admin'},
  {Identificacion: 1, name: 'Hydrogen', Surname: 'Matamoros',secondSurname:'Solano',ofice:'Cartago',role:'wuachi'},
  {Identificacion: 1, name: 'Hydrogen', Surname: 'Matamoros',secondSurname:'Cordero',ofice:'Cartago',role:'admin'},
  {Identificacion: 1, name: 'Hydrogen', Surname: 'Matamoros',secondSurname:'Cordero',ofice:'Cartago',role:'admin'},


 

];


