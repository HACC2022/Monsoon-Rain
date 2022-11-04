import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'src/app/bill.service';
import { TestimonyService } from 'src/app/testimony.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss'],
})
export class TestimonyComponent implements OnInit {
  billId: number;
  measureType: string = '';
  measureNumber: string = '';
  measureTitle: string = '';
  reportTitle: string = '';
  introducer: string = '';
  description: string = '';
  status: string = '';
  action?: string;
  lastUpdated?: string;
  companionBill?: string;
  currentReferrer?: string;
  offices: string[] = [];
  users: string[] = [''];
  testimonyId?: number;

  constructor(
    private billService: BillService,
    private testimonyService: TestimonyService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((params: any) => {
      console.log(params.params);
      this.billService
        .getBillById(params.params.id)
        .subscribe(({ data }: any) => {
          this.billId = data.id;
          this.measureType = data.measure_type;
          this.measureNumber = data.measure_number;
          this.measureTitle = data.measure_title;
          this.reportTitle = data.report_title;
          this.introducer = data.introduced_by;
          this.description = data.description;
          this.status = data.status;
          this.action = data.action;
          this.lastUpdated = data.last_updated;
          this.companionBill = data.companion_bill;
          this.currentReferrer = data.committee_referral;
        });

      this.testimonyService
        .getTestimonyById(params.params.tid)
        .subscribe((data) => {
          console.log(data);
        });
    });
  }

  ngOnInit(): void {}
}
