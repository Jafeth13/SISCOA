import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesOfficeService } from '../services-office.service';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
//OfficeListComponent
export class OfficeListComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['name', 'code','institution', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort = new MatSort();
  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  
  constructor(public restUser:ServiceUserService,public rest:ServicesOfficeService,private route:ActivatedRoute,private router:Router,private _liveAnnouncer: LiveAnnouncer) { 

  }
userData:any
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  idf=1
ngOnInit(): void {
  
  this.rut();
  this.obtener_localStorage();
    this.dataSource.sort=this.sort;


}
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  rut() {
    let idU =  localStorage.getItem("idUsuario") ;
    this.restUser
      .get(idU,idU)
      .subscribe((data: {}) => {
        console.log(data);
        this.userData = data;

      });
      
      console.log('XD')
      console.log(idU)
      this.rest.officeList(idU).subscribe((pos)=>{
      console.log(pos);
      this.dataSource.data=pos
      });
  }
  
  obtener_localStorage(){
    let idU =  localStorage.getItem("idUsuario") ; 
    this.userData.ID=idU   
    }

}
