import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
const endpoint = 'https://localhost:44353/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class OfficeControlServicesService {
  constructor(private http: HttpClient) { }

  delete(id: number, idUser: any): Observable<any> {
    return this.http
      .delete(
        endpoint + 'OficinaControles/' + id + '?IDuserLogged=' + idUser,
        httpOptions
      )
      .pipe(catchError(this.handleError('delete oficina')));
  }

  add(officeControl: any, id: any) {
    return this.http.post(
      endpoint + 'OficinaControles?IDuserLogged=' + id,
      officeControl,
      httpOptions
    );
  }

  update(id: any, officeControl: any, idUser: any) {
    return this.http.put(
      endpoint + 'OficinaControles/' + id + '?IDuserLogged=' + idUser,
      officeControl,
      httpOptions
    );
  }
  getBiId(id: any, idU: any): Observable<any> {
    return this.http.get(
      endpoint + 'OficinaControles/' + id + '?IDuserLogged=' + idU,
      httpOptions
    );
  }

  List(id: any): Observable<any> {
    return this.http.get(
      endpoint +
      'OficinaControl/GetDataGraphics_ControlsByStates?IDuserLogged=' +
      id,
      httpOptions
    );
  }

  deleteOfficeControl(id: any, idUser: any){
    return this.http.delete(
      endpoint + 'OficinaControles/' + id + '?IDuserLogged=' + idUser,
      httpOptions
    );
  }

  ListControlsWithExtraDays(id: any): Observable<any> {
    return this.http.get(
      endpoint +
      'OficinaControl/GetDataGraphics_ControlsWithExtraDays?IDuserLogged=' +
      id,
      httpOptions
    );
  }

  ListBySlopes(id: any): Observable<any> {
    return this.http.get(
      endpoint +
      'OficinaControl/GetDataGraphics_ControlsBySlopes?IDuserLogged=' +
      id,
      httpOptions
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
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
