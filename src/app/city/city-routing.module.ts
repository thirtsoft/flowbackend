import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { ListStateComponent } from './list-state/list-state.component';
import { StateComponent } from './state/state.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
