import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { ListStateComponent } from './list-state/list-state.component';
import { StateComponent } from './state/state.component';
import { ListZoneLivraisonComponent } from './list-zone-livraison/list-zone-livraison.component';
import { ZoneLivraison } from '../models/zone-livraison';

const routes: Routes = [
  {
    path: 'countries',
    component: ListCountryComponent,
  },
  {
    path: 'country',
    component: CountryComponent
  },
  {
    path: 'country/:id',
    component: CountryComponent
  },
  { 
    path: 'states', 
    component: ListStateComponent
  },
  {
    path: 'state',
    component: StateComponent
  },
  {
    path: 'state/:id',
    component: StateComponent
  },

  { 
    path: 'zone-livraisons', 
    component: ListZoneLivraisonComponent
  },
  {
    path: 'zone-livraison',
    component: ZoneLivraison
  },
  {
    path: 'zone-livraison/:id',
    component: ZoneLivraison
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
