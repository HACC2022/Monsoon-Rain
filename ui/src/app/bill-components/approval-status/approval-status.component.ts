import { Component, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { TestimonyService } from 'src/app/testimony.service';
import { ActivatedRoute } from '@angular/router';

export enum ApprovalStates {
  APPROVED = 'approved',
  MODIFY = 'modify',
  CANCEL = 'cancel',
}

@Component({
  selector: 'app-approval-status',
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('100ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
  templateUrl: './approval-status.component.html',
  styleUrls: ['./approval-status.component.scss'],
})
export class ApprovalStatusComponent implements OnInit {
  @Input() stage: string;
  @Input() type: string;
  @Input() status!: string;

  show = false;
  constructor(
    private testimonyService: TestimonyService,
    private route: ActivatedRoute
  ) {}

  swapShowOptions() {
    this.show = !this.show;
  }

  changeStageStatus(type: string) {
    this.show = false;

    this.route.paramMap.subscribe((params: any) => {
      this.testimonyService
        .createApproval(params.params.tid, type, this.stage)
        .subscribe();
    });
  }

  ngOnInit(): void {}
}
