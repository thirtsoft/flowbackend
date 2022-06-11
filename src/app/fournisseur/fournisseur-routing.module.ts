import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListEmailComponent } from './list-email/list-email.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListNewsletterComponent } from './list-newsletter/list-newsletter.component';

const routes: Routes = [
  {
    path: 'listFournisseurs',
    component: ListFournisseurComponent,
  },
  {
    path: 'fournisseur',
    component: FournisseurComponent
  },
  {
    path: 'fournisseur/:id',
    component: FournisseurComponent
  },
  { 
    path: 'newsletters', 
    component: ListNewsletterComponent 
  },
  { 
    path: 'emails', 
    component: ListEmailComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
