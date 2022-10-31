import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-see-control-full',
  templateUrl: './see-control-full.component.html',
  styleUrls: ['./see-control-full.component.css']
})
export class SeeControlFullComponent implements  OnInit{
  dataSource :any;

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  constructor(public rest:ServicesControllersService,private route:ActivatedRoute,private router:Router,public restUser:ServiceUserService) { }
  userData:any
  
  ngOnInit(): void {
   

      this.restUser.get(this.route.snapshot.params['IDS']).subscribe((data: {}) => {
        console.log(data);
        this.userData = data;
      });

 this.rest.getControlFull(this.route.snapshot.params['ID']).subscribe((pos)=>{
      console.log(pos);
      this.dataSource=pos
      });

     
  }



 
}

