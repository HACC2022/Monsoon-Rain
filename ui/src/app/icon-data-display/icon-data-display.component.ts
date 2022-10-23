import { Component, Input, OnInit } from '@angular/core';

export interface IconDataDisplay {
  data: string;
  url?: string;
}

@Component({
  selector: 'app-icon-data-display',
  templateUrl: './icon-data-display.component.html',
  styleUrls: ['./icon-data-display.component.scss'],
})
export class IconDataDisplayComponent implements OnInit {
  @Input() icon?: string;
  @Input() label!: string;
  @Input() data!: IconDataDisplay[];

  constructor() {}

  ngOnInit(): void {}
}
