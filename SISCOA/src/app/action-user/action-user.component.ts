import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivityServicesService } from '../activity-services.service';
import { ServiceUserService } from '../service-user.service';
import { id } from '@swimlane/ngx-charts';

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
  
this.rut();
this.obtener_localStorage();

}
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  rut(){
    let idU =  localStorage.getItem("idUsuario") ;
    this.rest.List(idU).subscribe((pos)=>{
      this.dataSource.data=pos
      });
     
  }

  obtener_localStorage(){
    let idU =  localStorage.getItem("idUsuario") ;
    }

}
