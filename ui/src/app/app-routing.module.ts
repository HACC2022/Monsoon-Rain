import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [{ path: 'bill', component: BillComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
