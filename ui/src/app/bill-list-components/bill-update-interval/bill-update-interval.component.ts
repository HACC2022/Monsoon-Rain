import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DataPresetsService } from 'src/app/data-presets.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bill-update-interval',
  templateUrl: './bill-update-interval.component.html',
  styleUrls: ['./bill-update-interval.component.scss'],
})
export class BillUpdateIntervalComponent implements OnInit {
  interval?: number;
  intervalLastUpdate?: Date;
  formSuccess = false;

  constructor(
    private dataPresents: DataPresetsService,
    private http: HttpClient
  ) {}

  updateInterval(event: Event) {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    this.interval = Number(value);
  }

  getInterval() {
    return this.dataPresents.interval;
  }

  setInterval() {
    this.http
      .patch(
        `${environment.apiBaseURL}/bill/interval`,
        new HttpParams({
          fromObject: { interval: this.interval ?? 1 },
        })
      )
      .subscribe(() => console.log('done'));

    this.formSuccess = true;
  }

  ngOnInit(): void {}
}
