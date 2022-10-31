import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
})
export class DataDisplayComponent implements OnInit {
  @Input() label!: string;
  @Input() data?: string;

  constructor() {}

  ngOnInit(): void {}
}
