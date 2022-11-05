import { Component, Input, OnInit } from '@angular/core';
import { DateTimes } from 'src/app/date-list/date-list.component';
import { IconDataDisplay } from '../icon-data-display/icon-data-display.component';

@Component({
  selector: 'app-bill-information',
  templateUrl: './bill-information.component.html',
  styleUrls: ['./bill-information.component.scss'],
})
export class BillInformationComponent implements OnInit {
  @Input() status?: string;
  @Input() action!: string;
  @Input() lastUpdated?: string;
  @Input() companionBill?: string;
  @Input() currentReferrer?: string;
  @Input() videos?: IconDataDisplay[];
  @Input() versions?: IconDataDisplay[];
  @Input() reports?: IconDataDisplay[];
  @Input() hearings?: DateTimes[];
  @Input() measureType?: string;
  @Input() measureNumber?: string;

  constructor() {}

  ngOnInit(): void {}
}
