import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';
import { Subscription } from 'rxjs';
import { BillService } from 'src/app/bill.service';
import { TestimonyService } from 'src/app/testimony.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss'],
})
export class TestimonyComponent implements OnInit {
  updateSubscription: Subscription;
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
  currentReferrer: string = '';
  offices: string[] = [];
  users: string[] = [''];
  testimonyId: number;

  approvals: any[] = [];
  comments: any[] = [];
  position: string;
  same: boolean;
  body: string;
  version: string;
  date: string;
  time: string;
  location: string;
  title: string;

  personTestifying: string = '';

  getTestimony() {
    return this.testimonyService.getTestimony();
  }

  updateTestimony(id: number) {
    this.testimonyService.getTestimonyById(id).subscribe(({ data }: any) => {
      console.log(data);
      this.approvals = data.approvals;
      this.comments = data.comments;
      this.position = data.position;
      this.same = data.same;
      this.body = data.body;

      this.personTestifying = `${data.user.first_name} ${data.user.last_name}, ${data.user.position.name}`;
    });
  }

  constructor(
    private billService: BillService,
    private testimonyService: TestimonyService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((params: any) => {
      this.testimonyId = params.params.tid;
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

          let hearings: any[] = [];

          data.hearing.split('; ').forEach((s: any) => {
            let date = '';
            let location = '';
            let url = '';

            s.split(', ').forEach((e: any, i: number) => {
              const f = e.split(': ');
              if (i === 1) {
                date = f[1].trim();
              } else if (i === 2) {
                location = f[1].trim();
              } else if (i === 3) {
                url = f[1].trim();
              }
            });

            const meridian = date[date.length - 1];
            const d = date.slice(0, -1);
            const event: any = {
              title: `${this.measureType.toUpperCase()} ${
                this.measureNumber
              } Hearing`,
              description: '',
              start: dayjs(
                `${d} ${meridian}M -10:00`,
                'M/DD/YY H:mm A Z'
              ).toISOString(),
              duration: [1, 'hour'],
            };

            hearings = [
              ...hearings,
              {
                date: dayjs(`${d} ${meridian}M -10:00`, 'M/DD/YY H:mm A Z'),
                location,
                url,
                youtube: 'http://youtube.com',
              },
            ];
          });

          this.date = hearings[hearings.length - 1].date.format('MM/DD/YYYY');
          this.time = hearings[hearings.length - 1].date.format('h:mm:ss A');
          this.location = hearings[hearings.length - 1].location;

          let versions: any[] = [];
          data.all_versions.split(',').forEach((r: any) => {
            const s = r.split(':https://');

            versions = [
              ...versions,
              {
                data: s[0].trim(),
                url: s[1].trim(),
              },
            ];
          });

          this.version = versions[versions.length - 1];

          this.title = `${data.measure_type.toUpperCase()} ${
            data.measure_number
          }, ${this.measureTitle}`;
        });

      this.updateTestimony(params.params.tid);

      this.updateSubscription = this.testimonyService.updateSubject.subscribe(
        () => {
          console.log('update sub');
          this.updateTestimony(params.params.tid);
        }
      );
    });
  }

  ngOnInit(): void {}
}
