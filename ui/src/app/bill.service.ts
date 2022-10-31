import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  bill: any;
  getBillById(id: string) {
    return this.http.get(`${environment.apiBaseURL}/bills/${id}`);
  }
  constructor(private http: HttpClient) {}
}
