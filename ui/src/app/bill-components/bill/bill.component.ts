import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'src/app/bill.service';
import { IconDataDisplay } from '../icon-data-display/icon-data-display.component';

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
  action?: string;
  lastUpdated?: string;
  companionBill?: string;
  currentReferrer?: string;
  offices: string[] = [''];
  users: string[] = [''];
  videos?: IconDataDisplay[];
  reports?: IconDataDisplay[];
  versions?: IconDataDisplay[];
  dateAndLocation?: IconDataDisplay[];

  constructor(private billService: BillService, private route: ActivatedRoute) {
    console.log(this.route);
    this.route.paramMap.subscribe((params: any) => {
      this.billService.getBillById(params.id).subscribe(({ data }: any) => {
        this.measureType = data.measure_type;
      });
    });
  }

  ngOnInit(): void {}
}
