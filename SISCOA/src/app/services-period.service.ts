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
export class ServicesPeriodService {
  constructor(private http: HttpClient) {}

  periodList(id: any): Observable<any> {
    return this.http.get(endpoint + 'Periodo?IDuserLogged=' + id, httpOptions);
  }

  delete(id: any, idUser: any): Observable<any> {
    return this.http.delete(
      endpoint + 'Periodo/' + id + '?IDuserLogged=' + idUser,
      httpOptions
    );
  }

  add(period: any, id: any) {
    return this.http.post(
      endpoint + 'Periodo?IDuserLogged=' + id,
      period,
      httpOptions
    );
  }

  get(id: any, idUser: any): Observable<any> {
    return this.http.get(
      endpoint + 'Periodo/' + id + '?IDuserLogged=' + idUser,
      httpOptions
    );
  }
  update(period: any, id: number, idUser: any): Observable<any> {
    return this.http
      .put(
        endpoint + 'Periodo/' + id + '?IDuserLogged=' + idUser,
        period,
        httpOptions
      )
      .pipe(catchError(this.handleError('deletePeriod')));
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
