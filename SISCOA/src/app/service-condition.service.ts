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
export class ServiceConditionService {

  constructor(private http: HttpClient) { }


  conditionalList():Observable<any>{

    return  this.http.get(endpoint+'Estados',httpOptions);
    
  }

}
