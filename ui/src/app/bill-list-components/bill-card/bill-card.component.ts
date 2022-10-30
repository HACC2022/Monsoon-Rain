import { Component, Input, OnInit } from '@angular/core';
import { AssignService } from 'src/app/assign.service';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent implements OnInit {
  @Input() id!: string;

  constructor(private assignService: AssignService) {}

  getIsSelected() {
    return this.assignService.isBillSelected(this.id);
  }

  selectBill(event: Event) {
    if (this.assignService.enabled) {
      event.preventDefault();
      if (!this.getIsSelected()) {
        this.assignService.selectBill(this.id);
      } else {
        this.assignService.deselectBill(this.id);
      }
    }
  }

  ngOnInit(): void {}
}
