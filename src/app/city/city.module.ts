import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CountryComponent } from './country/country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { ListStateComponent } from './list-state/list-state.component';
import { StateComponent } from './state/state.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListZoneLivraisonComponent } from './list-zone-livraison/list-zone-livraison.component';
import { ZoneLivraisonComponent } from './zone-livraison/zone-livraison.component';


@NgModule({
  declarations: [
    CountryComponent,
    ListCountryComponent,
    ListStateComponent,
    StateComponent,
    ListZoneLivraisonComponent,
    ZoneLivraisonComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule
  ]
})
export class CityModule { }
