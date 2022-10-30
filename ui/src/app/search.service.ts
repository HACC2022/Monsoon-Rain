import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  search() {}

  sortBy(type: string) {
    console.log(type);
  }
}
