import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillHeaderComponent } from './bill-header/bill-header.component';
import { BillComponent } from './bill/bill.component';
import { PillComponent } from './pill/pill.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { BillInformationComponent } from './bill-information/bill-information.component';
import { IconDataDisplayComponent } from './icon-data-display/icon-data-display.component';
import { ApprovalTimelineComponent } from './approval-timeline/approval-timeline.component';
import { TestimonyTableComponent } from './testimony-table/testimony-table.component';

@NgModule({
  declarations: [AppComponent, BillHeaderComponent, BillComponent, PillComponent, AvatarComponent, DataDisplayComponent, BillInformationComponent, IconDataDisplayComponent, ApprovalTimelineComponent, TestimonyTableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
