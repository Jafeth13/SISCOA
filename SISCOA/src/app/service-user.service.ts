import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
const endpoint='https://localhost:44353/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private http: HttpClient) { }

  
  userList():Observable<any>{

    return  this.http.get(endpoint+'Usuario',httpOptions);
    
  }

  add(Usuario:any){
    return  this.http.post(endpoint+'Usuario',Usuario,httpOptions);
  }
  
}
