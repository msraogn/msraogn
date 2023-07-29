import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DesignDetails, LoginDetails } from '../constant/commonFiles';

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

  getDesignsData(): Observable<DesignDetails[]> {
    return this.http.get<DesignDetails[]>(this.baseURL + 'getDesigns').pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  insertDesignData(book:any): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    // return this.http.post(this.baseURL + 'InsertDesign', book, { headers: httpHeaders }).toPromise()
    //        .then(this.extractData)
    //        .catch(this.handleErrorPromise);
    return this.http.post(this.baseURL + 'InsertDesign', book, { headers: httpHeaders });
  } 

  insertRegisterData(book:any): Promise<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    return this.http.post(this.baseURL + 'InsertLogin', book, { headers: httpHeaders }).toPromise()
           .then(this.extractData)
           .catch(this.handleErrorPromise);
  } 

  private extractData(res: any) {
    let body = res;
    return body;
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  } 

  // insertRegisterData(register: any): Observable<any> {
  //   return this.http.post(this.baseURL + 'InsertLogin', register);
  // }

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