import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { PermisionServicesService } from '../permision-services.service';
@Component({
  selector: 'app-see-permision',
  templateUrl: './see-permision.component.html',
  styleUrls: ['./see-permision.component.css']
})
export class SeePermisionComponent implements OnInit {

  constructor( public rest: PermisionServicesService,
    private route: ActivatedRoute,
    private router: Router,) { }
    permisionData:any
  ngOnInit(): void {
    let idU = localStorage.getItem('idUsuario');

    this.rest
      .get(this.route.snapshot.params['ID'], idU)
      .subscribe((data: {}) => {
        this.permisionData = data;
      });
  }

}
