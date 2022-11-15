import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';
import { MatSort, Sort } from '@angular/material/sort';
@Component({
  selector: 'app-extra-day',
  templateUrl: './extra-day.component.html',
  styleUrls: ['./extra-day.component.css'],
})
export class ExtraDayComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'name',
    'Descripcion','office',
    'Period','extra',
    'status',
    'action', 
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort = new MatSort();
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
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.rut();
    this.dataSource.sort = this.sort;
  }

  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.rest.getControlDayExtra(idU).subscribe((pos) => {
      this.dataSource.data = pos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
