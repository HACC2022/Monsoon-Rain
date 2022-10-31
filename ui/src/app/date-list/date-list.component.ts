import { Component, Input, OnInit } from '@angular/core';

export interface DateTimes {
  date: string;
  location: string;
  url: string;
  youtube: string;
}

@Component({
  selector: 'app-date-list',
  templateUrl: './date-list.component.html',
  styleUrls: ['./date-list.component.scss'],
})
export class DateListComponent implements OnInit {
  @Input() label!: string;
  @Input() data?: DateTimes[];
  constructor() {}

  ngOnInit(): void {}
}
