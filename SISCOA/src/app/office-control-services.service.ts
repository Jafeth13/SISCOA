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

export class OfficeControlServicesService {

  constructor(private http: HttpClient) { }

  delete(id: number): Observable<any>{
    return this.http.delete(endpoint+'OficinaControles/'+id, httpOptions).pipe(
      catchError(this.handleError('delete oficina'))
    );
  }

  add(officeControl:any){
    return  this.http.post(endpoint+'OficinaControles',officeControl,httpOptions);
  }

  update(id:any,officeControl:any){
    return  this.http.put(endpoint+'OficinaControles/'+id,officeControl,httpOptions);
  }

  List():Observable<any>{

    return  this.http.get(endpoint+'OficinaControl/GetDataGraphics_ControlsByStates',httpOptions);
    
  }

  ListControlsWithExtraDays():Observable<any>{

    return  this.http.get(endpoint+'OficinaControl/GetDataGraphics_ControlsWithExtraDays',httpOptions);
    
  }

  
  ListBySlopes():Observable<any>{

    return  this.http.get(endpoint+'OficinaControl/GetDataGraphics_ControlsBySlopes',httpOptions);
    
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


