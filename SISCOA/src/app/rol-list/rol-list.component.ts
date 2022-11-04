import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesRolService } from '../services-rol.service';
import { ServiceUserService } from '../service-user.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html',
  styleUrls: ['./rol-list.component.css']
})
export class RolListComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['name','action'];
  dataSource = new MatTableDataSource();
  constructor(public restUser:ServiceUserService,public rest:ServicesRolService,private route:ActivatedRoute,private router:Router) { }
userData:any
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
ngOnInit(): void {
  
    this.rut()
}
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  rut() {
    let idU =  localStorage.getItem("idUsuario") ;
    this.restUser.get(idU,idU).subscribe((data: {}) => {
      this.userData = data;
      
    });
      this.rest.rolList(idU).subscribe((pos)=>{
      this.dataSource.data=pos
    });
  }

}