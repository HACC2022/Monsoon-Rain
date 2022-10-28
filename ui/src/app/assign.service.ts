import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssignService {
  private enabled = true;

  private selectedBills = [];
  constructor() {}
}
