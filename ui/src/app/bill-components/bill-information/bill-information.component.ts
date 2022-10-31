import { Component, Input, OnInit } from '@angular/core';
import { google, outlook, office365, yahoo, ics } from 'calendar-link';
import * as dayjs from 'dayjs';
import { IconDataDisplay } from '../icon-data-display/icon-data-display.component';

@Component({
  selector: 'app-bill-information',
  templateUrl: './bill-information.component.html',
  styleUrls: ['./bill-information.component.scss'],
})
export class BillInformationComponent implements OnInit {
  @Input() status?: string;
  @Input() action?: string;
  @Input() lastUpdated?: string;
  @Input() companionBill?: string;
  @Input() currentReferrer?: string;
  @Input() videos?: IconDataDisplay[];
  @Input() versions?: IconDataDisplay[];
  @Input() reports?: IconDataDisplay[];
  @Input() dateAndLocation?: IconDataDisplay[];
  @Input() measureType?: string;
  @Input() measureNumber?: string;

  constructor() {
    const event: any = {
      title: `${this.measureType} ${this.measureNumber} Hearing`,
      description: '',
      start: '2019-12-29 18:00:00 +0100',
      duration: [1, 'hour'],
    };

    const url = ics(event);
    console.log(url);
  }

  ngOnInit(): void {}
}
