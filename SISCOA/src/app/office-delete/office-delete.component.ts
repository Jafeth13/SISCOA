import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesOfficeService } from '../services-office.service';
import { ServiceUserService } from '../service-user.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-office-delete',
  templateUrl: './office-delete.component.html',
  styleUrls: ['./office-delete.component.css'],
})
export class OfficeDeleteComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public rest: ServicesOfficeService,
    private route: ActivatedRoute,
    private router: Router,
    public restUser: ServiceUserService

  ) {}
userData:any
  ngOnInit(): void {
    this.rut();
  }
  officeDataDelete: any;
  rut() {
    this.rest.get(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe((data: {}) => {
      console.log(data);
      this.officeDataDelete = data;
    });
    this.restUser
      .get(this.route.snapshot.params['IDS'],this.route.snapshot.params['IDS'])
      .subscribe((data: {}) => {
        console.log(data);
        this.userData = data;
      });
  }

  delete() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.rest.delete(this.route.snapshot.params['ID'],this.route.snapshot.params['IDS']).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/officeList/'+this.userData.ID]);
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
