
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-controls-offices',
  templateUrl: './add-controls-offices.component.html',
  styleUrls: ['./add-controls-offices.component.css']
})
export class AddControlsOfficesComponent implements OnInit {
   firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  constructor(private route:ActivatedRoute, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
