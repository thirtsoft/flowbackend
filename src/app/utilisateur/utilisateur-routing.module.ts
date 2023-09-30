import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternauteComponent } from './internaute/internaute.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { ProfileUtilisateurComponent } from './profile-utilisateur/profile-utilisateur.component';
import { UpdatePasswordOfUtilisateurComponent } from './update-password-of-utilisateur/update-password-of-utilisateur.component';
import { UpdateProfileOfUtilisateurComponent } from './update-profile-of-utilisateur/update-profile-of-utilisateur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ActivatedUtilisateurComponent } from './activated-utilisateur/activated-utilisateur.component';

const routes: Routes = [
  {
    path: 'listUtilisateurs',
    component: ListUtilisateurComponent,
  },
  {
    path: 'internautes',
    component: InternauteComponent,
  },
  { 
    path: 'utilisateur/:id', 
    component: UtilisateurComponent 
  },
  {
    path: 'profile/:id',
    component: ProfileUtilisateurComponent
  },
  {
    path: 'profile/:id',
    component: UpdateProfileOfUtilisateurComponent
  },
  {
    path: 'profile/:id',
    component: UpdatePasswordOfUtilisateurComponent
  },

  {
    path: 'activated-desactivated-profile',
    component: ActivatedUtilisateurComponent
  },

  {
    path: 'profile',
    component: ProfileUtilisateurComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
