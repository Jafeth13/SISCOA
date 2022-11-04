import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.css'],
})
export class PeriodListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'start', 'end', 'action'];
  dataSource = new MatTableDataSource();
  constructor(
    public restUser: ServiceUserService,
    public rest: ServicesPeriodService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  userData: any;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
   
    this.rut();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rut() {
    let idU = localStorage.getItem('idUsuario');
      this.rest.periodList(idU).subscribe((pos) => {
      this.dataSource.data = pos;
    });

  }
}
