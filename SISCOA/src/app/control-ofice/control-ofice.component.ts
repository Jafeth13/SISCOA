import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-control-ofice',
  templateUrl: './control-ofice.component.html',
  styleUrls: ['./control-ofice.component.css']
})

export class ControlOficeComponent  implements AfterViewInit ,OnInit{
  displayedColumns: string[] = ['name', 'Descripcion','Period','status','notification', 'action'];
  dataSource = new MatTableDataSource();
  

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  constructor(public restUser:ServiceUserService,public rest:ServicesControllersService,private route:ActivatedRoute,private router:Router) { }
  userData:any
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  idP:number=1
  nc={
    ncd:0
  }
  ngOnInit(): void {
     
     this.restUser.get(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe((data) => {
      console.log(data);
      console.log('aqi')
      this.userData = data;
      this.nc.ncd=this.userData.TSISCOA_Oficina.ID;
       console.log(this.nc.ncd);
       this.rest.getControl(this.nc.ncd,this.route.snapshot.params['ID']).subscribe((pos)=>{
      console.log('entre')
      console.log(pos);
      this.dataSource.data=pos;
      });
    }); 
   


      console.log('pase aqui')
     
  }


  back(){
    
    this.router.navigate(["/controlMenu/"+this.route.snapshot.params['ID']]);

    
      
  }

 
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }}

  

