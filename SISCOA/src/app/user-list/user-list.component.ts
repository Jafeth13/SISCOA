import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['Identificacion', 'name', 'Surname','secondSurname','ofice','role', 'action'];
  dataSource = new MatTableDataSource();
  constructor(public rest:ServiceUserService,private route:ActivatedRoute,private router:Router,public restUser:ServiceUserService) { }

  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.rest.userList().subscribe((pos)=>{
      console.log(pos);
      console.log('pinte')
      this.dataSource.data=pos
      });
  }

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  rut(){
    this.restUser.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
     });
  }

  back() {
    this.router.navigate(['/Menu/' + this.route.snapshot.params['ID']]);
  }
}






