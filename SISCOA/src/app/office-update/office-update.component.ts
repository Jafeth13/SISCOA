import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesOfficeService } from '../services-office.service';
import Swal from 'sweetalert2';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-office-update',
  templateUrl: './office-update.component.html',
  styleUrls: ['./office-update.component.css']
})
export class OfficeUpdateComponent implements OnInit {

  
  
  constructor(private fb: FormBuilder,public rest:ServicesOfficeService,private route:ActivatedRoute,private router:Router) { 

  

  }

  ngOnInit(): void {
this.rut();
  }
  @Input()officeDataupdate:any
  rut(){
    this.rest.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.officeDataupdate = data;
    });
  }

  update(){
    this.rest.update(this.officeDataupdate,this.route.snapshot.params['ID']).subscribe((result) => {
   
      Swal.fire(
        'Good job!',
        'estado sucessfully updated!',
        'success'
      )     
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      console.log(err);
    });
  }



}
