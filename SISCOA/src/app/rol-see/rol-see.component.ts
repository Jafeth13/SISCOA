import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';
@Component({
  selector: 'app-rol-see',
  templateUrl: './rol-see.component.html',
  styleUrls: ['./rol-see.component.css'],
})
export class RolSeeComponent implements OnInit {
  constructor(
    public rest: ServicesRolService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rut();
  }
  roleDataDelete: any;
  rut() {
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.roleDataDelete = data;
    });
  }
}