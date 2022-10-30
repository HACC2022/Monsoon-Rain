import { Component, Input, OnInit } from '@angular/core';

export interface TableRow {
  date: string;
  status: string;
  creator: string;
  testimony: string;
}

@Component({
  selector: 'app-testimony-table',
  templateUrl: './testimony-table.component.html',
  styleUrls: ['./testimony-table.component.scss'],
})
export class TestimonyTableComponent implements OnInit {
  @Input() rows!: TableRow[];

  constructor() {}

  ngOnInit(): void {}
}
