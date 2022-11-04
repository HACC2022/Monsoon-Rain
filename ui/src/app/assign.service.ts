import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, merge, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchService } from './search.service';

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
    let usersPost$: Observable<any> = of(null);
    let officesPost$: Observable<any> = of(null);
    this.selectedBills.forEach((bill) => {
      console.log(Array.from(this.assignedUsers));
      if (this.assignedUsers.size > 0) {
        usersPost$ = this.http.post(
          `${environment.apiBaseURL}/bills/assign/users/`,
          new HttpParams({
            fromObject: {
              billId: bill,
              users: Array.from(this.assignedUsers),
            },
          })
        );
      }
      if (this.assignedOffices.size > 0) {
        officesPost$ = this.http.post(
          `${environment.apiBaseURL}/bills/assign/offices/`,
          new HttpParams({
            fromObject: {
              billId: bill,
              offices: Array.from(this.assignedOffices),
            },
          })
        );
      }

      forkJoin([usersPost$, officesPost$]).subscribe(() => {
        this.searchService.getAllBills();

        this.enabled = false;
        this.selectedBills = new Set<number>();
      });
    });
  }

  constructor(private http: HttpClient, private searchService: SearchService) {}
}
