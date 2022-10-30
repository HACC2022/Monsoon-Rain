import { Injectable } from '@angular/core';

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
  offices: Offices = {
    '1': 'OSSS',
    '2': 'GA',
  };
  users: Users = {
    '1': 'Joe Mama',
    '2': 'John Nakasone',
  };

  getOffices() {
    return this.offices;
  }

  getUsers() {
    return this.users;
  }

  constructor() {}
}
