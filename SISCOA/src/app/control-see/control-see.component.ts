import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesControllersService } from '../services-controllers.service';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-control-see',
  templateUrl: './control-see.component.html',
  styleUrls: ['./control-see.component.css'],
})
export class ControlSeeComponent implements OnInit {
  @Input() controlData: any;
  userData: any;
  constructor(
    public rest: ServicesControllersService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService
  ) {}

  ngOnInit(): void {
    this.rut();
  }

  rut() {
    this.rest.get(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe((data: {}) => {
      console.log(data);
      this.controlData = data;
    });

    this.restUser
      .get(this.route.snapshot.params['IDS'],this.route.snapshot.params['IDS'])
      .subscribe((data: {}) => {
        console.log(data);
        this.userData = data;
      });
  }
}
