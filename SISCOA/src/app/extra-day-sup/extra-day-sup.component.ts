import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-extra-day-sup',
  templateUrl: './extra-day-sup.component.html',
  styleUrls: ['./extra-day-sup.component.css']
})
export class ExtraDaySupComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'name',
    'Descripcion',
    'office',
    'Period',
    'date1',
    'date2',
    'extra',
    'status',
   
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
    this.rest.getControlDayExtra(idU).subscribe((pos) => {
      this.dataSource.data = pos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
