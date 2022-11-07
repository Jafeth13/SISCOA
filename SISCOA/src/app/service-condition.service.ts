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
export class ServiceConditionService {
  constructor(private http: HttpClient) {}

  conditionalList(id: any): Observable<any> {
    return this.http.get(endpoint + 'Estados?IDuserLogged=' + id, httpOptions);
  }

  add(status: any, id: any) {
    return this.http.post(
      endpoint + 'Estados?IDuserLogged=' + id,
      status,
      httpOptions
    );
  }

  delete(id: number, idUser: any): Observable<any> {
    return this.http
      .delete(
        endpoint + 'Estados/' + id + '?IDuserLogged=' + idUser,
        httpOptions
      )
      .pipe(catchError(this.handleError('deleteConditional')));
  }

  update(status: any, id: number, idUser: any): Observable<any> {
    return this.http
      .put(
        endpoint + 'Estados/' + id + '?IDuserLogged=' + idUser,
        status,
        httpOptions
      )
      .pipe(catchError(this.handleError('updateConditional')));
  }

  get(id: any, idUser: any): Observable<any> {
    return this.http.get(
      endpoint + 'Estados/' + id + '?IDuserLogged=' + idUser,
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
