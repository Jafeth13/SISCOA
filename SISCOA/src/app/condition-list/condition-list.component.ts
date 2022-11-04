import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceConditionService } from '../service-condition.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-condition-list',
  templateUrl: './condition-list.component.html',
  styleUrls: ['./condition-list.component.css']
})

export class ConditionListComponent implements AfterViewInit,OnInit {
  conditionalList:any
  displayedColumns: string[] = ['name','action'];
  dataSource = new MatTableDataSource();
  userData:any
  constructor(public restUser:ServiceUserService,public rest:ServiceConditionService,private route:ActivatedRoute,private router:Router) { }
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.rut();
  }

 
  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.restUser.get(idU, idU).subscribe((data: {}) => {
      this.userData = data;
    }); 
        this.rest.conditionalList(idU).subscribe((pos)=>{
    this.dataSource.data=pos
    });
  }

}