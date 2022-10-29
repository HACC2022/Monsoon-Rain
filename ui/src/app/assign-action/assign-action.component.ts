import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-action',
  templateUrl: './assign-action.component.html',
  styleUrls: ['./assign-action.component.scss'],
})
export class AssignActionComponent implements OnInit {
  enabled = false;
  assignedUsers: Set<string> = new Set<string>();
  assignedOffices: Set<string> = new Set<string>();

  constructor() {}

  swapEnable() {
    this.enabled = !this.enabled;
  }

  assignUser(event: Event) {
    const target = event.target as HTMLSelectElement;
    const { selectedOptions } = target;

    for (let i = 0; i < selectedOptions.length; i++) {
      this.assignedUsers.add(selectedOptions[i].value);
    }
  }

  assignOffice(event: Event) {
    const target = event.target as HTMLSelectElement;
    const { selectedOptions } = target;

    for (let i = 0; i < selectedOptions.length; i++) {
      this.assignedOffices.add(selectedOptions[i].value);
    }
  }

  // Update API
  assign() {
    if (this.assignedUsers.size > 0) {
      console.log(this.assignedUsers);
    }
    if (this.assignedOffices.size > 0) {
      console.log(this.assignedOffices);
    }
  }

  ngOnInit(): void {}
}
