import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignService } from 'src/app/assign.service';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent implements OnInit {
  @Input() id!: string;
  @Input() billType!: string;
  @Input() billNumber!: string;
  @Input() measureTitle!: string;
  @Input() description!: string;
  @Input() action!: string;
  @Input() hearingDate!: Date;
  @Input() offices!: any[];

  constructor(private assignService: AssignService, private router: Router) {}

  isAssignMode() {
    return this.assignService.enabled;
  }

  getIsSelected() {
    return this.assignService.isBillSelected(this.id);
  }

  selectBill(event: Event) {
    if (this.assignService.enabled) {
      if (!this.getIsSelected()) {
        this.assignService.selectBill(this.id);
      } else {
        this.assignService.deselectBill(this.id);
      }
    } else {
      this.router.navigate(['bill', this.id]);
    }
  }

  ngOnInit(): void {}
}
