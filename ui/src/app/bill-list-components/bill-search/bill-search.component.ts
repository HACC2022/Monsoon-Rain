import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-bill-search',
  templateUrl: './bill-search.component.html',
  styleUrls: ['./bill-search.component.scss'],
})
export class BillSearchComponent implements OnInit {
  searchValue = '';

  constructor(private searchService: SearchService) {}

  setSearchValue(event: Event) {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    this.searchValue = value;
  }

  search(event: Event) {
    event.preventDefault();
    console.log(this.searchValue);
  }

  sortBy(event: Event) {
    const target = event.target as HTMLSelectElement;
    const { value } = target;

    this.searchService.sortBy(value);
  }

  ngOnInit(): void {}
}
