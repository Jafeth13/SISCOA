import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorServicesService } from '../error-services.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-error-system',
  templateUrl: './error-system.component.html',
  styleUrls: ['./error-system.component.css'],
})
export class ErrorSystemComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'description',
    'actionSys',
    'date',
    'user',
    'action',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  constructor(
    public rest: ErrorServicesService,
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
    this.rest.List(idU).subscribe((pos) => {
      this.dataSource.data = pos;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
