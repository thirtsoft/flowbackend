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
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DetailFournisseurComponent } from './detail-fournisseur/detail-fournisseur.component';


@NgModule({
  declarations: [
    ListEmailComponent,
    ListFournisseurComponent,
    FournisseurComponent,
    ListNewsletterComponent,
    MailToNewsletterComponent,
    MailToFournisseurComponent,
    DetailFournisseurComponent
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule,

    MatDialogModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} },
  ],
  entryComponents:[
    ListFournisseurComponent, ListEmailComponent,
    ListNewsletterComponent, FournisseurComponent,
    MailToFournisseurComponent, MailToNewsletterComponent
  ]
})
export class FournisseurModule { }
