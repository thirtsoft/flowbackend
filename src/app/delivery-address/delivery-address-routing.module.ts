import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { ListDeliveryAddressComponent } from './list-delivery-address/list-delivery-address.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ListClientComponent,
  },
  { 
    path: 'addressLivraisons', 
    component: ListDeliveryAddressComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryAddressRoutingModule { }
