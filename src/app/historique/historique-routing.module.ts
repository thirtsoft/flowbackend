import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueCommandeComponent } from './historique-commande/historique-commande.component';
import { HistoriqueLoginComponent } from './historique-login/historique-login.component';

const routes: Routes = [
  {
    path: 'historiqueCommandes',
    component: HistoriqueCommandeComponent,
  },
  {
    path: 'historiqueLogins',
    component: HistoriqueLoginComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriqueRoutingModule { }
