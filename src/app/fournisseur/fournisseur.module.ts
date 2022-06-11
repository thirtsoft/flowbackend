import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { ListEmailComponent } from './list-email/list-email.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListNewsletterComponent } from './list-newsletter/list-newsletter.component';
import { MailToNewsletterComponent } from './mail-to-newsletter/mail-to-newsletter.component';
import { MailToFournisseurComponent } from './mail-to-fournisseur/mail-to-fournisseur.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListEmailComponent,
    ListFournisseurComponent,
    FournisseurComponent,
    ListNewsletterComponent,
    MailToNewsletterComponent,
    MailToFournisseurComponent
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule
  ]
})
export class FournisseurModule { }
