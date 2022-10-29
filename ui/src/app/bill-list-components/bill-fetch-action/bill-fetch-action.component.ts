import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-fetch-action',
  templateUrl: './bill-fetch-action.component.html',
  styleUrls: ['./bill-fetch-action.component.scss'],
})
export class BillFetchActionComponent implements OnInit {
  enabled = false;

  constructor() {}

  swapEnable() {
    console.log('ok');
    this.enabled = !this.enabled;
  }

  ngOnInit(): void {}
}
