import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-approval-stage]',
  templateUrl: './approval-stage.component.html',
  styleUrls: ['./approval-stage.component.scss'],
})
export class ApprovalStageComponent implements OnInit {
  @Input() name!: string;
  @Input() stage!: string;
  @Input() status!: string;
  @Input() user!: string;

  constructor() {}

  ngOnInit(): void {}
}
