import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChiffAffOrderPeerMonthComponent } from './chiff-aff-order-peer-month/chiff-aff-order-peer-month.component';
import { ChiffAffOrderPeerYearComponent } from './chiff-aff-order-peer-year/chiff-aff-order-peer-year.component';
import { ChartComponent } from './chart/chart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChiffAffOrderPeerMonthComponent,
    ChiffAffOrderPeerYearComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule
  ]
})
export class ChartModule { }
