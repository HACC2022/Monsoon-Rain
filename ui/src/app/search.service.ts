import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  bills: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllBills();
  }

  getAllBills() {
    this.http
      .get(`${environment.apiBaseURL}/bills`)
      .subscribe(({ data }: any) => {
        console.log(data);
        this.bills = data;
      });
  }

  search(measureNumber: string) {
    this.http
      .get(`${environment.apiBaseURL}/bills/measure/${measureNumber}`)
      .subscribe(({ data }: any) => {
        console.log(data);
        this.bills = data;
      });
  }

  sortBy(type: string) {
    this.http
      .get(`${environment.apiBaseURL}/bills/search/${type}`)
      .subscribe(({ data }: any) => {
        console.log(data);
        this.bills = data;
      });
  }

  filter(id: number) {
    this.http
      .get(`${environment.apiBaseURL}/bills/office/${id}`)
      .subscribe(({ data }: any) => {
        console.log(data);
        this.bills = data;
      });
  }
}
