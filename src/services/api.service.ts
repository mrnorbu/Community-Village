import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;
  private defaultTimeout = 100000; // 100 seconds 

  constructor(private http: HttpClient) {}

  // Private method for headers
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  // Generic GET request
  getData<T>(endpoint: string): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}/${endpoint}`, { headers: this.getHeaders() })
      .pipe(
        timeout(this.defaultTimeout),
        map((res: T) => res),
        catchError(this.handleError)
      );
  }

  // GET request by ID
  getDataById<T>(endpoint: string, id: any): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}/${endpoint}/${id}`, { headers: this.getHeaders() })
      .pipe(
        timeout(this.defaultTimeout),
        map((res: T) => res),
        catchError(this.handleError)
      );
  }

  // POST request
  postData<T>(endpoint: string, data: any): Observable<T> {
    return this.http
      .post<T>(`${this.apiUrl}/${endpoint}`, data, { headers: this.getHeaders() })
      .pipe(
        timeout(this.defaultTimeout),
        map((res: T) => res),
        catchError(this.handleError)
      );
  }

  // PUT request
  putData<T>(endpoint: string, data: any): Observable<T> {
    return this.http
      .put<T>(`${this.apiUrl}/${endpoint}`, data, { headers: this.getHeaders() })
      .pipe(
        timeout(this.defaultTimeout),
        map((res: T) => res),
        catchError(this.handleError)
      );
  }

  // DELETE request
  deleteDataById<T>(endpoint: string, id: any): Observable<T> {
    return this.http
      .delete<T>(`${this.apiUrl}/${endpoint}/${id}`, { headers: this.getHeaders() })
      .pipe(
        timeout(this.defaultTimeout),
        map((res: T) => res),
        catchError(this.handleError)
      );
  }

  // Error handler
  private handleError(error: any): Observable<never> {
    // Implement your error handling logic here
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
