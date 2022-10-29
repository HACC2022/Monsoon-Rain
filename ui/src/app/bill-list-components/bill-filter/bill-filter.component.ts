import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-filter',
  templateUrl: './bill-filter.component.html',
  styleUrls: ['./bill-filter.component.scss'],
})
export class BillFilterComponent implements OnInit {
  offices: Set<string> = new Set<string>();

  constructor() {}

  assignOffice(event: Event) {
    const target = event.target as HTMLSelectElement;
    const { selectedOptions } = target;

    for (let i = 0; i < selectedOptions.length; i++) {
      this.offices.add(selectedOptions[i].value);
    }
  }

  filter() {
    console.log(this.offices);
  }

  ngOnInit(): void {}
}
