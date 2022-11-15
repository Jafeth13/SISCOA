import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
import { ServiceUserService } from '../service-user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-rol-see',
  templateUrl: './rol-see.component.html',
  styleUrls: ['./rol-see.component.css'],
})
export class RolSeeComponent implements OnInit {
  constructor(
    public rest: ServicesRolService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService
  ) { }
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource();
  userData: any
  ngOnInit(): void {
    this.rut();
  }
  roleDataDelete: any;
  rut() {
    let idU = localStorage.getItem("idUsuario");

    this.rest.get(this.route.snapshot.params['ID'], idU).subscribe((data: {}) => {
      this.roleDataDelete = data;
    });

    this.rest.rolListPermision(this.route.snapshot.params['ID'], idU).subscribe((pos) => {
      this.dataSource.data = pos;
    });


  }
  @ViewChild(MatPaginator) paginator: any = MatPaginator;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  back() {
    this.router.navigate(['/rolList']);
  }

}
