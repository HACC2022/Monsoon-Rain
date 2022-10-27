import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-action',
  templateUrl: './assign-action.component.html',
  styleUrls: ['./assign-action.component.scss'],
})
export class AssignActionComponent implements OnInit {
  enabled = false;

  constructor() {}

  swapEnable() {
    this.enabled = !this.enabled;
  }

  ngOnInit(): void {}
}
