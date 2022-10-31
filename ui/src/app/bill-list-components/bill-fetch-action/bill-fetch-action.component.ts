import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataPresetsService } from 'src/app/data-presets.service';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
@Component({
  selector: 'app-bill-fetch-action',
  templateUrl: './bill-fetch-action.component.html',
  styleUrls: ['./bill-fetch-action.component.scss'],
})
export class BillFetchActionComponent implements OnInit {
  fetchAction$?: Subscription;
  enabled = false;

  constructor(
    private dataPresents: DataPresetsService,
    private http: HttpClient
  ) {}

  swapEnable() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      console.log('k');
      this.fetchAction$ = this.http
        .get(`${environment.apiBaseURL}/bill/force`)
        .subscribe(() => {
          setTimeout(() => {
            this.enabled = false;
            this.dataPresents.updateBillInterval();
          }, 2000);
        });
    }
  }

  getIntervalLastUpdated() {
    return dayjs(this.dataPresents.intervalLastUpdated).fromNow();
  }

  ngOnInit(): void {}
}
