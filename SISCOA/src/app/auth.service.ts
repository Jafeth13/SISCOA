import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ServiceUserService } from './service-user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()
  user: any;
  constructor(public restUser:ServiceUserService) { 
    const token = localStorage.getItem('Siscoa');
    this._isLoggedIn$.next(!!token);
  }

  login(loginData:any){
    return this.restUser.logIn(loginData).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('Siscoa', response.jwtToken)
        this.user = this.getUser(response.jwtToken)
      })
    );
  }
  
  private getUser(token: any){
    if(token!=null){
      return JSON.parse(atob(token.split('.')[1]))
    }   
  }

  logout(){
    this._isLoggedIn$.next(false);
    return localStorage.clear();
  }
  getStorageRole(){
    const token = localStorage.getItem('Siscoa');
    if(token!=null){
      const storageUser = this.getUser(token);
      return storageUser;
    }
  }

}


