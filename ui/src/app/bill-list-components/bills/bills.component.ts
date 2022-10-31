import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  constructor(private search: SearchService) {}

  getBills() {
    return this.search.bills;
  }

  ngOnInit(): void {}
}
