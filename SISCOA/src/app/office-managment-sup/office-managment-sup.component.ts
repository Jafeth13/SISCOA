import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesOfficeService } from '../services-office.service';
import { ServicesControllersService } from '../services-controllers.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ServicesPeriodService } from '../services-period.service';
import { ServiceUserService } from '../service-user.service';
import * as moment from 'moment';
import { OfficeControlServicesService } from '../office-control-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-office-managment-sup',
  templateUrl: './office-managment-sup.component.html',
  styleUrls: ['./office-managment-sup.component.css']
})
export class OfficeManagmentSupComponent implements OnInit, AfterViewInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  date: any;
  hour: any;
  date2: any;
  hour2: any;
  startDate: any;
  enddate: any;
  dataSource = new MatTableDataSource();
  dataSourceControl = new MatTableDataSource();
  dataSourcePeriod: any;
  @ViewChild('paginator') paginator: any = MatPaginator;
  @ViewChild('paginator2') paginator2: any = MatPaginator;
  displayedColumns: string[] = ['name', 'code', 'institution', 'action'];
  displayedxColumns: string[] = [
    'name',
    'Descripcion',
    'Period',
    'date1',
    'date2',
    'date3',
    'status',
    'action',
  ];
  controlDataupdate: any;
  name = {
    nameOff: '',
    indication: 'Controles',
  };

  constructor(
    public restUser: ServiceUserService,
    public restPeriodic: ServicesPeriodService,
    public rest: ServicesOfficeService,
    public rest2: ServicesControllersService,
    private route: ActivatedRoute,
    private router: Router,
    private _formBuilder: FormBuilder,
    public officeControl: OfficeControlServicesService
  ) { }

  ngAfterViewInit() {
    this.dataSourceControl.paginator = this.paginator2;

    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.rut();
  }
  update(id: number) {
    let idU = localStorage.getItem("idUsuario");

    this.rest2.getControlFull(id, idU).subscribe((data: {}) => {
      this.controlDataupdate = data;
    });
  }
  office: any;
  dar(id: any, name: any) {
    let idU = localStorage.getItem("idUsuario");

    this.office = id;
    this.rest2.getControl(this.office, idU).subscribe((pos) => {
      this.dataSourceControl.data = pos;
    });
    this.name.nameOff = name;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter2(event: Event) {
    const filterValue2 = (event.target as HTMLInputElement).value;
    this.dataSourceControl.filter = filterValue2.trim().toLowerCase();
  }
  back() {
    this.router.navigate(['/controlMenuSup']);
  }


  extraDay() {
    let idU = localStorage.getItem("idUsuario");


    this.officeControl.update(this.controlDataupdate.ID, this.controlDataupdate, idU).subscribe(
      (result) => {
        Swal.fire('Buen trabajo!', 'El proceso fue exitoso!', 'success');
        this.router.navigate(['/controlMenuSup']);
      }

      ,
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al cambiar controles de oficina!',
        });
      }
    );
  }
  rut() {
    let idU = localStorage.getItem("idUsuario");

    this.rest.officeList(idU).subscribe((pos) => {
      this.dataSource.data = pos;
    });

    this.restPeriodic.periodList(idU).subscribe((pos) => {
      this.dataSourcePeriod = pos;
    });
  }
  download(id: any) {
    let idU = localStorage.getItem("idUsuario");
    this.officeControl.getBiId(id, idU).subscribe((data: any) => {
      if (data.Archivos[0]) {
        let base64String = data.Archivos[0].TC_Datos;
        this.downloadPdf(base64String, data.Archivos[0].TC_Nombre);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No hay archivos para descargar!',
        });
      }
    });
  }

  downloadPdf(base64String: any, fileName: any) {
    const source = `${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`;
    link.click();
  }

  delete(id:any){
    let idU =  localStorage.getItem("idUsuario") ;

    Swal.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir esto.!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.officeControl.deleteOfficeControl(id,idU).subscribe((data) => {
          this.router.navigate(['/controlMenu']);
        });
        Swal.fire('Eliminado!', 'Control eliminada correctamente.', 'success');
      }
    });
  }
}
