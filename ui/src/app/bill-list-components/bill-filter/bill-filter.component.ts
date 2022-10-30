import { Component, OnInit } from '@angular/core';
import { DataPresetsService } from 'src/app/data-presets.service';

@Component({
  selector: 'app-bill-filter',
  templateUrl: './bill-filter.component.html',
  styleUrls: ['./bill-filter.component.scss'],
})
export class BillFilterComponent implements OnInit {
  offices: Set<string> = new Set<string>();

  constructor(private dataPresetsService: DataPresetsService) {}

  getOffices() {
    return this.dataPresetsService.getOffices();
  }

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
