import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesRolService } from '../services-rol.service';

@Component({
  selector: 'app-rol-register',
  templateUrl: './rol-register.component.html',
  styleUrls: ['./rol-register.component.css'],
})
export class RolRegisterComponent implements OnInit {
  @Input() roleData = {
    ID: 0,
    TC_Nombre: '',
  };
  constructor(
    public rest: ServicesRolService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  add() {
    this.rest.add(this.roleData).subscribe(
      (result) => {
        Swal.fire('Good job!', 'Estado added sucessfully!', 'success');
        this.router.navigate(['/rolList']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.log(err);
      }
    );
  }
}
