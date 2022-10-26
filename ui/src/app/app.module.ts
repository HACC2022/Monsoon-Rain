import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillHeaderComponent } from './bill-components/bill-header/bill-header.component';
import { BillComponent } from './bill-components/bill/bill.component';
import { PillComponent } from './bill-components/pill/pill.component';
import { AvatarComponent } from './bill-components/avatar/avatar.component';
import { DataDisplayComponent } from './bill-components/data-display/data-display.component';
import { BillInformationComponent } from './bill-components/bill-information/bill-information.component';
import { IconDataDisplayComponent } from './bill-components/icon-data-display/icon-data-display.component';
import { ApprovalTimelineComponent } from './bill-components/approval-timeline/approval-timeline.component';
import { TestimonyTableComponent } from './bill-components/testimony-table/testimony-table.component';
import { BillsComponent } from './bill-list-components/bills/bills.component';
import { BillCardComponent } from './bill-card/bill-card.component';
import { BillSearchComponent } from './bill-search/bill-search.component';
import { BillFilterComponent } from './bill-filter/bill-filter.component';
import { BillActionsComponent } from './bill-actions/bill-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    BillHeaderComponent,
    BillComponent,
    PillComponent,
    AvatarComponent,
    DataDisplayComponent,
    BillInformationComponent,
    IconDataDisplayComponent,
    ApprovalTimelineComponent,
    TestimonyTableComponent,
    BillsComponent,
    BillCardComponent,
    BillSearchComponent,
    BillFilterComponent,
    BillActionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
