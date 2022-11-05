import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'src/app/bill.service';
import { DateTimes } from 'src/app/date-list/date-list.component';
import { IconDataDisplay } from '../icon-data-display/icon-data-display.component';
import { google, outlook, office365, yahoo, ics } from 'calendar-link';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
  measureType: string = '';
  measureNumber: string = '';
  measureTitle: string = '';
  reportTitle: string = '';
  introducer: string = '';
  description: string = '';
  status: string = '';
  action!: string;
  lastUpdated?: string;
  companionBill?: string;
  currentReferrer?: string;
  offices: any[] = [];
  users: any[] = [];
  testimonies: any[] = [];
  videos?: IconDataDisplay[];
  reports?: IconDataDisplay[];
  versions?: IconDataDisplay[];
  hearings?: DateTimes[];

  constructor(private billService: BillService, private route: ActivatedRoute) {
    route.paramMap.subscribe((params: any) => {
      this.billService
        .getBillById(params.params.id)
        .subscribe(({ data }: any) => {
          console.log(data);
          this.measureType = data.measure_type;
          this.measureNumber = data.measure_number;
          this.measureTitle = data.measure_title;
          this.reportTitle = data.report_title;
          this.introducer = data.introduced_by;
          this.description = data.description;
          this.status = data.status;
          this.action = data.action;
          this.lastUpdated = dayjs.unix(data.last_updated).toString();
          this.companionBill = data.companion_bill;
          this.currentReferrer = data.committee_referral;
          this.offices = data.offices;
          this.users = data.users;
          this.testimonies = data.testimonies;

          let hearings: DateTimes[] = [];

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

            url = ics(event);

            hearings = [
              ...hearings,
              {
                date: `${date}M`,
                location,
                url,
                youtube: 'http://youtube.com',
              },
            ];
          });

          this.hearings = hearings;

          let reports: IconDataDisplay[] = [];

          data.committee_reports.split(',').forEach((r: any) => {
            const s = r.split(':https://');

            reports = [
              ...reports,
              {
                data: s[0].trim(),
                url: s[1].trim(),
              },
            ];
          });

          this.reports = reports;

          let versions: IconDataDisplay[] = [];

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

          this.versions = versions;
        });
    });
  }

  ngOnInit(): void {}
}
