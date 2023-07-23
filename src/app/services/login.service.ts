import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginDetails } from '../constant/commonFiles';

@Injectable()
export class MyLoginService {
  baseURL: string = "http://localhost:5000/";

  constructor(private http: HttpClient) { }

  getData(): Observable<LoginDetails[]> {
    return this.http.get<LoginDetails[]>(this.baseURL).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  insertDesignData(design: any): Observable<any> {
    return this.http.post(this.baseURL + 'InsertDesign', design);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }

}