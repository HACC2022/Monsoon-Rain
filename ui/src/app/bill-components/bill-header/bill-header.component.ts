import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-header',
  templateUrl: './bill-header.component.html',
  styleUrls: ['./bill-header.component.scss'],
})
export class BillHeaderComponent implements OnInit {
  @Input() code?: string;
  @Input() measureTitle?: string;
  @Input() reportTitle?: string;
  @Input() introducer?: string;
  @Input() description?: string;
  @Input() status?: string;
  @Input() offices?: string[];
  @Input() users?: string[];

  constructor() // assignedUsers?: string[] // assignedOffices?: string[], // status?: string, // introducer?: string, // reportTitle: string, // measureTitle: string, // code: string,
  {
    // this.code = code;
    // this.measureTitle = measureTitle;
    // this.reportTitle = reportTitle;
    // this.introducer = introducer;
    // this.status = status;
    // this.assignedOffices = assignedOffices;
    // this.assignedUsers = assignedUsers;
  }

  ngOnInit(): void {}
}
