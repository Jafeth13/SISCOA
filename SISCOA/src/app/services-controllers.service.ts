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

  listControl(id:any):Observable<any>{

    return  this.http.get('https://localhost:44353/api/Controls?IDuserLogged='+id,httpOptions);
    
  }

  getControlDayExtra(id:any):Observable<any>{
    return  this.http.get(endpoint+'OficinaControl/GetDataGraphicsTable_ControlsWithExtraDays?IDuserLogged='+id,httpOptions);
  }

  getControlDaySlopes(id:any):Observable<any>{
    return  this.http.get(endpoint+'OficinaControl/GetDataGraphicsTable_ControlsBySlopes?IDuserLogged='+id,httpOptions);
  }

  getControl(id:any,idUser:any):Observable<any>{
    return  this.http.get(endpoint+'OficinaControl/GetOfficeControlByIdOffice/'+id+'?IDuserLogged='+idUser, httpOptions);   
  }
  getControlId(id:any,idUser:any):Observable<any>{
    return  this.http.get(endpoint+'OficinaControles/'+id+'?IDuserLogged='+idUser, httpOptions);   
  }
  
  get(id:any,idUser:any):Observable<any>{
    return  this.http.get(endpoint+'Controls/'+id+'?IDuserLogged='+idUser, httpOptions);   
  }

  getControlFull(id:any,idUser:any):Observable<any>{
    return  this.http.get(endpoint+'OficinaControles/'+id+'?IDuserLogged='+idUser, httpOptions);   
  }


  add(Controls :any,id:any){
    return this.http.post(endpoint+'Controls?IDuserLogged='+id, Controls, httpOptions);   
  }

  delete(id: number,idUser:any): Observable<any>{
    return this.http.delete(endpoint+'Controls/'+id+'?IDuserLogged='+idUser, httpOptions).pipe(
      catchError(this.handleError('deleteControl'))
    );
  }

  update(Controls: any,id:number,idU:any): Observable<any>{
    return this.http.put(endpoint+'Controls/'+id+'?IDuserLogged='+idU,Controls, httpOptions).pipe(
      catchError(this.handleError('updateControl'))
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
