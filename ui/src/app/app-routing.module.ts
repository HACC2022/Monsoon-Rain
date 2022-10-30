import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill-components/bill/bill.component';
import { BillsComponent } from './bill-list-components/bills/bills.component';
import { TestimonyComponent } from './testimony/testimony.component';

const routes: Routes = [
  { path: '', component: BillsComponent },
  { path: 'bill/:id', component: BillComponent },
  { path: 'bill/:id/testimony/:tid', component: TestimonyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
