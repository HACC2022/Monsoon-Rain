import { Component, OnInit } from '@angular/core';
import { AssignService } from 'src/app/assign.service';
import { DataPresetsService } from 'src/app/data-presets.service';

@Component({
  selector: 'app-assign-action',
  templateUrl: './assign-action.component.html',
  styleUrls: ['./assign-action.component.scss'],
})
export class AssignActionComponent implements OnInit {
  constructor(
    private assignService: AssignService,
    private dataPresetsService: DataPresetsService
  ) {}

  swapEnable() {
    this.assignService.swapEnable();
  }

  getEnabled() {
    return this.assignService.enabled;
  }

  getNumberSelectedBills() {
    return this.assignService.numberBillsSelected();
  }

  getOffices() {
    return this.dataPresetsService.getOffices();
  }

  getUsers() {
    return this.dataPresetsService.getUsers();
  }

  assignUser(event: Event) {
    const target = event.target as HTMLSelectElement;
    const { selectedOptions } = target;

    for (let i = 0; i < selectedOptions.length; i++) {
      this.assignService.assignUser(selectedOptions[i].value);
    }
  }

  assignOffice(event: Event) {
    const target = event.target as HTMLSelectElement;
    const { selectedOptions } = target;

    for (let i = 0; i < selectedOptions.length; i++) {
      this.assignService.assignOffice(selectedOptions[i].value);
    }
  }

  // Update API
  assign() {
    this.assignService.assign();
  }

  ngOnInit(): void {}
}
