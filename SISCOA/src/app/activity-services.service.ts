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
export class ActivityServicesService {


  constructor(private http: HttpClient) { }


  List(id:any):Observable<any>{

    return  this.http.get(endpoint+'Actividad?IDuserLogged='+id,httpOptions);
    
  }
}
