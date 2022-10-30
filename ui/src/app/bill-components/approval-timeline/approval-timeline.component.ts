import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-approval-timeline',
  templateUrl: './approval-timeline.component.html',
  styleUrls: ['./approval-timeline.component.scss'],
})
export class ApprovalTimelineComponent implements OnInit {
  constructor() {}

  generatePDF() {
    const pdf = new jsPDF();
  }

  ngOnInit(): void {}
}
