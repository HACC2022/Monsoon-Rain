import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-update-interval',
  templateUrl: './bill-update-interval.component.html',
  styleUrls: ['./bill-update-interval.component.scss'],
})
export class BillUpdateIntervalComponent implements OnInit {
  @Input() interval?: number;
  formSuccess = false;

  constructor() {}

  setInterval() {
    this.formSuccess = true;
  }

  ngOnInit(): void {}
}
