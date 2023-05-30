import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError((err: HttpErrorResponse) => {
          return throwError( () => err)
      }));
  }
}
