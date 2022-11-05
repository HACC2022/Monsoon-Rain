import { Component, OnInit } from '@angular/core';
import { DataPresetsService } from 'src/app/data-presets.service';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-bill-filter',
  templateUrl: './bill-filter.component.html',
  styleUrls: ['./bill-filter.component.scss'],
})
export class BillFilterComponent implements OnInit {
  office: number;

  constructor(
    private dataPresetsService: DataPresetsService,
    private searchService: SearchService
  ) {}

  getOffices() {
    return this.dataPresetsService.getOffices();
  }

  assignOffice(event: Event) {
    const target = event.target as HTMLSelectElement;
    const { value } = target;

    this.office = Number(value);
  }

  filter() {
    this.searchService.filter(this.office);
  }

  ngOnInit(): void {}
}
