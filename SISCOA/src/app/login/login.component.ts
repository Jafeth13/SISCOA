import { ServiceUserService } from '../service-user.service';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

@Input()userData={
    ID: 0,
    TC_Identificacion: "",
    TV_Contrasenna: "",
    TC_Correo: "" 
}  
 name:any;
constructor(private fb: FormBuilder,public restUser:ServiceUserService,private route:ActivatedRoute,private router:Router,private auth:AuthService) {
  
  this.loginForm = this.fb.group({
    TC_Identificacion: ['', [Validators.required]],
    TV_Contrasenna: ['', [Validators.required]]
  });
 }

  ngOnInit(): void {
  
  }
 ID:number=0;
  logIn(){

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

    this.auth.login(this.loginForm.value).subscribe((data={})=>{
      console.log(data); 
      this.ID=data.ID;
      this.router.navigate(["/controlMenu/"+this.ID]);
      this.router.navigate(["/navbar/"+this.ID]);

     
      console.log(this.ID);
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      },(error) =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Bad credentials',
        });
        console.log(error);
        console.log(this.userData);
        this.loginForm = this.fb.group({
          TC_Identificacion: ['', [Validators.required]],
          TV_Contrasenna: ['', [Validators.required]]
        });
      });
      
  }

  get identification() { return this.loginForm.get('TC_Identificacion'); };
  get password() { return this.loginForm.get('TV_Contrasenna'); };


}
