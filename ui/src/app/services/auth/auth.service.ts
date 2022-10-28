import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /** apiBaseUrl is defined in environments/environment.ts */
  apiBaseUrl = environment.apiBaseURL;
  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/register`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
  }
}
