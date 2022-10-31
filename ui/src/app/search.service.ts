import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  bills: any[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get(`${environment.apiBaseURL}/bills`)
      .subscribe(({ data }: any) => {
        console.log(data);
        this.bills = data;
      });
  }

  search() {}

  sortBy(type: string) {
    console.log(type);
  }
}
