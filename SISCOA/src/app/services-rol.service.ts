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
export class ServicesRolService {

  constructor(private http: HttpClient) { }

  rolList():Observable<any>{

    return  this.http.get(endpoint+'Roles',httpOptions);

      }

  get(id:any):Observable<any>{
    return  this.http.get(endpoint+'Roles/'+id, httpOptions);   
  }
  
  delete(id:any):Observable<any>{
    return  this.http.delete(endpoint+'Roles/'+id, httpOptions);   
  }


  add(roles:any){
    return  this.http.post(endpoint+'Roles',roles,httpOptions);
  }

  update(role: any,id:number): Observable<any>{
    return this.http.put(endpoint+'Roles/'+id,role, httpOptions).pipe(
      catchError(this.handleError('deleteRateType'))
    );
  }

  
  rolPermision(roles:any){
    return  this.http.post(endpoint+'RolPermisos',roles,httpOptions);
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
