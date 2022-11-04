import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TestimonyService {
  testimony: any;
  getTestimonyById(id: string) {
    return this.http.get(`${environment.apiBaseURL}/testimony/${id}`);
  }

  constructor(private http: HttpClient) {}
}
