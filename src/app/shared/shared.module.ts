import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination' ;

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    /*
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule,
    MatDialogModule, 
    MatDialogRef,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    MatPaginatorModule
    */
  ],
  exports: [ 
    CommonModule, 
    /*
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule,
    MatDialogModule, 
    MatDialogRef,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    MatPaginatorModule
    */
  ]
})
export class SharedModule { }
