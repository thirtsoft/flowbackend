import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { ListLigneCommandeComponent } from './list-ligne-commande/list-ligne-commande.component';
import { ListPayedCommandeComponent } from './list-payed-commande/list-payed-commande.component';
import { ListPendingCommandeComponent } from './list-pending-commande/list-pending-commande.component';
import { ViewCommandeComponent } from './view-commande/view-commande.component';

const routes: Routes = [
  {
    path: '',
    component: ListCommandeComponent,
  },
  { 
    path: 'commande-encours', 
    component: ListPendingCommandeComponent 
  },
  {
    path: 'commande-payees',
    component: ListPayedCommandeComponent
  },
  { 
    path: 'detailsCommandes', 
    component: ListLigneCommandeComponent 
  },
  {
    path: 'view-Commande/:id',
    component: ViewCommandeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
