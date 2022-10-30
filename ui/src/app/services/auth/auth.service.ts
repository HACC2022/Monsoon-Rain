import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /** apiBaseUrl is defined in environments/environment.ts */
  apiBaseUrl = environment.apiBaseURL;
  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    // console.log(`${this.apiBaseUrl}/register`);
    // console.log(firstName);
    return this.http.post(`${this.apiBaseUrl}/register`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    // console.log(`${this.apiBaseUrl}/register`);
    return this.http.post(`${this.apiBaseUrl}/login`, {
      email: email,
      password: password
    }).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }
}
