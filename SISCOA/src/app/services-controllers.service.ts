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
export class ServicesControllersService {
  constructor(private http: HttpClient) { }

  officeList():Observable<any>{

    return  this.http.get(endpoint+'Controls',httpOptions);
    
  }

  getControl(id:any):Observable<any>{
    return  this.http.get(endpoint+'Controls/GetControlesByOficina/'+id, httpOptions);   
  }

  
  get(id:any):Observable<any>{
    return  this.http.get(endpoint+'Controls/'+id, httpOptions);   
  }

  add(Controls :any){
    return this.http.post(endpoint+'Controls', Controls, httpOptions);   
  }

  delete(id: number): Observable<any>{
    return this.http.delete(endpoint+'Controls/'+id, httpOptions).pipe(
      catchError(this.handleError('deleteRateType'))
    );
  }

  update(Controls: any,id:number): Observable<any>{
    return this.http.put(endpoint+'Controls/'+id,Controls, httpOptions).pipe(
      catchError(this.handleError('deleteRateType'))
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
