import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternauteComponent } from './internaute/internaute.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { ProfileUtilisateurComponent } from './profile-utilisateur/profile-utilisateur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

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
    path: 'profil/:id',
    component: ProfileUtilisateurComponent
  },

  {
    path: 'profil',
    component: ProfileUtilisateurComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
