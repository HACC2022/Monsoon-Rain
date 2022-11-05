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

  updateAction(id: string, action: string) {
    return this.http.patch(`${environment.apiBaseURL}/bill/action/${id}`, {
      action,
    });
  }
  constructor(private http: HttpClient) {}
}
