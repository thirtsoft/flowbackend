import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { ListLigneCommandeComponent } from './list-ligne-commande/list-ligne-commande.component';
import { ListPayedCommandeComponent } from './list-payed-commande/list-payed-commande.component';
import { ListPendingCommandeComponent } from './list-pending-commande/list-pending-commande.component';
import { UpdateStatusCommandeComponent } from './update-status-commande/update-status-commande.component';
import { ViewCommandeComponent } from './view-commande/view-commande.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ListCommandeComponent,
    ListLigneCommandeComponent,
    ListPayedCommandeComponent,
    ListPendingCommandeComponent,
    UpdateStatusCommandeComponent,
    ViewCommandeComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule,
    MatDialogModule,
 //   BrowserAnimationsModule,
 //   BrowserModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} },
  ],
  entryComponents:[
    UpdateStatusCommandeComponent, ListPendingCommandeComponent,
    ListPayedCommandeComponent, ViewCommandeComponent,
    ListCommandeComponent
  ]
})
export class CommandeModule { }
