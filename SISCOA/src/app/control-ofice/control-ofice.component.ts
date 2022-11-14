import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-control-ofice',
  templateUrl: './control-ofice.component.html',
  styleUrls: ['./control-ofice.component.css'],
})
export class ControlOficeComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'name',
    'Descripcion',
    'Period',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  constructor(
    public restUser: ServiceUserService,
    public rest: ServicesControllersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  userData: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  idP: number = 1;
  nc = {
    ncd: 0,
    name:'',
  };
  ngOnInit(): void {
    this.rut();
  }

  rut() {
    let idU = localStorage.getItem('idUsuario');
    this.restUser.get(idU, idU).subscribe((data: {}) => {
      this.userData = data;
      this.nc.ncd = this.userData.TSISCOA_Oficina.ID;
      this.nc.name=this.userData.TSISCOA_Oficina.TC_Nombre;
      this.rest.getControl(this.nc.ncd, idU).subscribe((pos) => {
        this.dataSource.data = pos;
      });
    });
  }

  back() {
    this.router.navigate(['/controlMenu']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
