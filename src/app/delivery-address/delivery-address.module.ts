import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryAddressRoutingModule } from './delivery-address-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListClientComponent } from './list-client/list-client.component';
import { ListDeliveryAddressComponent } from './list-delivery-address/list-delivery-address.component';


@NgModule({
  declarations: [
    ListClientComponent,
    ListDeliveryAddressComponent
  ],
  imports: [
    CommonModule,
    DeliveryAddressRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule
  ]
})
export class DeliveryAddressModule { }
