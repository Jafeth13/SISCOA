import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  role: String = '';
    email: String = 'Log in';

  constructor(private route:ActivatedRoute,private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    if(this.auth.getStorageRole()!=undefined){
      this.email = this.auth.getStorageRole().TC_Identificacion;
      this.role = this.auth.getStorageRole().TC_Identificacion;
     
    }
  }
  logout(){

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1700,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed out successfully'
    })


    this.router.navigate(['/homes']);
    this.email = 'Log in';
    this.role = ''  
    this.auth.logout();
    this.auth.user = undefined;
  }

  openDialog() {
    this.router.navigate(['/LoginForm']); 
    
  }
}
