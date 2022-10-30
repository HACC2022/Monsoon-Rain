import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssignService {
  public enabled = false;
  private selectedBills: Set<string> = new Set<string>();

  private assignedUsers: Set<string> = new Set<string>();
  private assignedOffices: Set<string> = new Set<string>();

  swapEnable() {
    this.enabled = !this.enabled;
  }

  assignUser(user: string) {
    this.assignedUsers.add(user);
  }

  assignOffice(user: string) {
    this.assignedOffices.add(user);
  }

  selectBill(bill: string) {
    this.selectedBills.add(bill);
  }

  deselectBill(bill: string) {
    this.selectedBills.delete(bill);
  }

  isBillSelected(bill: string) {
    return this.selectedBills.has(bill);
  }

  numberBillsSelected() {
    return this.selectedBills.size;
  }

  // Update API
  assign() {
    this.selectedBills.forEach((bill) => {
      if (this.assignedUsers.size > 0) {
        // iterate over users
        console.log(this.assignedUsers);
      }
      if (this.assignedOffices.size > 0) {
        // iterate over offices
        console.log(this.assignedOffices);
      }
    });
  }

  constructor() {}
}
