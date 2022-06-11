import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriqueRoutingModule } from './historique-routing.module';
import { HistoriqueLoginComponent } from './historique-login/historique-login.component';
import { HistoriqueCommandeComponent } from './historique-commande/historique-commande.component';
import { HistoriqueComponent } from './historique/historique.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoriqueLoginComponent,
    HistoriqueCommandeComponent,
    HistoriqueComponent
  ],
  imports: [
    CommonModule,
    HistoriqueRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule,
  ]
})
export class HistoriqueModule { }
