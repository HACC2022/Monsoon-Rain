import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export interface TableRow {
  date: string;
  status: string;
  creator: string;
  testimony: string;
}

@Component({
  selector: 'app-testimony-table',
  templateUrl: './testimony-table.component.html',
  styleUrls: ['./testimony-table.component.scss'],
})
export class TestimonyTableComponent implements OnInit {
  @Input() rows!: TableRow[];
  @Input() assignees?: string[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  createTestimony() {
    this.route.paramMap.subscribe((params: any) => {
      this.http
        .post(
          `${environment.apiBaseURL}/bills/testimony`,
          new HttpParams({
            fromObject: {
              user: 1,
              billId: params.params.id,
            },
          })
        )
        .subscribe(({ id }: any) => {
          this.router.navigate(['bill', params.params.id, 'testimony', id]);
        });
    });
  }

  ngOnInit(): void {}
}
