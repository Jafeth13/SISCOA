import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-table-by-status',
  templateUrl: './table-by-status.component.html',
  styleUrls: ['./table-by-status.component.css']
})
export class TableByStatusComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'name',
    'Descripcion'
    ,'office',
    'Period',
    
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  constructor(
    public rest: ServicesControllersService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService
  ) {}
  userData: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.rut();
  }

  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.rest.getControlByStatus(idU).subscribe((pos) => {
      this.dataSource.data = pos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
