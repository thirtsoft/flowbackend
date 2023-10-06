import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListEmailComponent } from './list-email/list-email.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListNewsletterComponent } from './list-newsletter/list-newsletter.component';
import { MailToFournisseurComponent } from './mail-to-fournisseur/mail-to-fournisseur.component';
import { MailToNewsletterComponent } from './mail-to-newsletter/mail-to-newsletter.component';
import { DetailFournisseurComponent } from './detail-fournisseur/detail-fournisseur.component';

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
    path: 'detail/:id',
    component: DetailFournisseurComponent
  },
  { 
    path: 'newsletters', 
    component: ListNewsletterComponent 
  },
  { 
    path: 'emails', 
    component: ListEmailComponent 
  },
  {
    path: 'mail-to-fournisseur',
    component: MailToFournisseurComponent
  },
  {
    path: 'mail-to-newsletter',
    component: MailToNewsletterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
