import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-data-display-action',
  templateUrl: './data-display-action.component.html',
  styleUrls: ['./data-display-action.component.scss'],
})
export class DataDisplayActionComponent implements OnInit {
  @Input() action!: string;

  constructor(
    private route: ActivatedRoute,
    private billService: BillService
  ) {}

  updateAction(event: Event) {
    const target = event.target as HTMLSelectElement;
    const { value } = target;

    console.log(value);

    this.route.paramMap.subscribe((params: any) => {
      this.billService.updateAction(params.params.id, value).subscribe();
    });
  }

  ngOnInit(): void {}
}
