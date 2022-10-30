import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesOfficeService } from '../services-office.service';

@Component({
  selector: 'app-office-see',
  templateUrl: './office-see.component.html',
  styleUrls: ['./office-see.component.css'],
})
export class OfficeSeeComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public rest: ServicesOfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rut();
  }
  officeDataDelete: any;
  rut() {
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.officeDataDelete = data;
    });
  }
}
