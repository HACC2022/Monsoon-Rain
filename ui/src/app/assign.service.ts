import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssignService {
  public enabled = false;
  private selectedBills: Set<number> = new Set<number>();

  private assignedUsers: Set<number> = new Set<number>();
  private assignedOffices: Set<number> = new Set<number>();

  swapEnable() {
    this.enabled = !this.enabled;
  }

  assignUser(user: number) {
    this.assignedUsers.add(user);
  }

  assignOffice(user: number) {
    this.assignedOffices.add(user);
  }

  selectBill(bill: number) {
    this.selectedBills.add(bill);
  }

  deselectBill(bill: number) {
    this.selectedBills.delete(bill);
  }

  isBillSelected(bill: number) {
    return this.selectedBills.has(bill);
  }

  numberBillsSelected() {
    return this.selectedBills.size;
  }

  // Update API
  assign() {
    this.selectedBills.forEach((bill) => {
      if (this.assignedUsers.size > 0) {
        this.http.post('/bills/testimonies/assign/users/', {
          id: bill,
          user: Array.from(this.assignedUsers),
        });
      }
      if (this.assignedOffices.size > 0) {
        // iterate over offices
        console.log(this.assignedOffices);
      }
    });
  }

  constructor(private http: HttpClient) {}
}
