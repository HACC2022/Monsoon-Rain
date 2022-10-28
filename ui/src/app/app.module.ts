import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { BillCardComponent } from './bill-list-components/bill-card/bill-card.component';
import { BillSearchComponent } from './bill-list-components/bill-search/bill-search.component';
import { BillFilterComponent } from './bill-list-components/bill-filter/bill-filter.component';
import { BillActionsComponent } from './bill-list-components/bill-actions/bill-actions.component';
import { AssignActionComponent } from './bill-list-components/assign-action/assign-action.component';
import { BillFetchActionComponent } from './bill-list-components/bill-fetch-action/bill-fetch-action.component';
import { BillUpdateIntervalComponent } from './bill-list-components/bill-update-interval/bill-update-interval.component';
import { TestimonyComponent } from './testimony-components/testimony/testimony.component';
import { AssignService } from './assign.service';
import { TestimonyPositionComponent } from './testimony-components/testimony-position/testimony-position.component';
import { TestimonyEditorComponent } from './testimony-components/testimony-editor/testimony-editor.component';
import { TestimonyCommentComponent } from './testimony-components/testimony-comment/testimony-comment.component';
import { TestimonyCommentsComponent } from './testimony-components/testimony-comments/testimony-comments.component';
import { ApprovalStatusComponent } from './bill-components/approval-status/approval-status.component';
import { ApprovalApprovedComponent } from './approval-approved/approval-approved.component';
import { ApprovalModifyComponent } from './approval-modify/approval-modify.component';
import { ApprovalClearComponent } from './approval-clear/approval-clear.component';
import { ApprovalMakePdfComponent } from './approval-make-pdf/approval-make-pdf.component';
import { ApprovalStageComponent } from './approval-stage/approval-stage.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';

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
    AssignActionComponent,
    BillFetchActionComponent,
    BillUpdateIntervalComponent,
    TestimonyComponent,
    TestimonyPositionComponent,
    TestimonyEditorComponent,
    TestimonyCommentComponent,
    TestimonyCommentsComponent,
    ApprovalStatusComponent,
    ApprovalApprovedComponent,
    ApprovalModifyComponent,
    ApprovalClearComponent,
    ApprovalMakePdfComponent,
    ApprovalStageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [AssignService],
  bootstrap: [AppComponent],
})
export class AppModule {}
