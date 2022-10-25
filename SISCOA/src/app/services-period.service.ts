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
export class ServicesPeriodService {

  constructor(private http: HttpClient) { }

  periodList():Observable<any>{

    return  this.http.get(endpoint+'Periodo',httpOptions);
    
  }
  
  delete(id:any):Observable<any>{
    return  this.http.delete(endpoint+'Periodo/'+id, httpOptions);   
  }


  add(period:any){
    return  this.http.post(endpoint+'Periodo',period,httpOptions);
  }

  get(id:any):Observable<any>{
    return  this.http.get(endpoint+'Periodo/'+id, httpOptions);   
  }
  update(period: any,id:number): Observable<any>{
    return this.http.put(endpoint+'Periodo/'+id,period, httpOptions).pipe(
      catchError(this.handleError('deletePeriod'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}