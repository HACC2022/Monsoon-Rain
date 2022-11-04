import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Offices {
  [key: string]: string; // id: office
}
export interface Users {
  [key: string]: string; // id: user
}

@Injectable({
  providedIn: 'root',
})
export class DataPresetsService {
  offices: Offices = {};
  users: Users = {};
  interval: number = 0;
  intervalLastUpdated?: string;

  getOffices() {
    return this.offices;
  }

  getUsers() {
    return this.users;
  }

  updateBillInterval() {
    this.http
      .get(`${environment.apiBaseURL}/bill/interval`)
      .subscribe(({ interval, lastUpdated }: any) => {
        this.interval = interval;
        this.intervalLastUpdated = lastUpdated;
      });
  }

  constructor(private http: HttpClient) {
    this.http
      .get(`${environment.apiBaseURL}/offices`)
      .subscribe(({ data }: any) => {
        console.log(data);
        data.forEach((office: any) => {
          this.offices[office.id] = office.abbreviation;
        });
      });

    this.http
      .get(`${environment.apiBaseURL}/users`)
      .subscribe(({ data }: any) => {
        data.forEach((user: any) => {
          this.users[user.id] = `${user.first_name} ${user.last_name}`;
        });
        console.log(this.users);
      });

    this.updateBillInterval();
  }
}
