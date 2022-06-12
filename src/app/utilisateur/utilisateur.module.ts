import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatedUtilisateurComponent } from './activated-utilisateur/activated-utilisateur.component';
import { InternauteComponent } from './internaute/internaute.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { MailToUtilisateurComponent } from './mail-to-utilisateur/mail-to-utilisateur.component';
import { ProfileUtilisateurComponent } from './profile-utilisateur/profile-utilisateur.component';
import { SendMailToUtilisateurComponent } from './send-mail-to-utilisateur/send-mail-to-utilisateur.component';
import { UpdatePasswordOfUtilisateurComponent } from './update-password-of-utilisateur/update-password-of-utilisateur.component';
import { UpdateProfileOfUtilisateurComponent } from './update-profile-of-utilisateur/update-profile-of-utilisateur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';


@NgModule({
  declarations: [
    ActivatedUtilisateurComponent,
    InternauteComponent,
    ListUtilisateurComponent,
    MailToUtilisateurComponent,
    ProfileUtilisateurComponent,
    SendMailToUtilisateurComponent,
    UpdatePasswordOfUtilisateurComponent,
    UpdateProfileOfUtilisateurComponent,
    UtilisateurComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} },

],


entryComponents: [
  ListUtilisateurComponent, InternauteComponent,
  ActivatedUtilisateurComponent, ProfileUtilisateurComponent,
  MailToUtilisateurComponent, SendMailToUtilisateurComponent,
  UpdateProfileOfUtilisateurComponent,
  UpdatePasswordOfUtilisateurComponent
  ]
})
export class UtilisateurModule { }
