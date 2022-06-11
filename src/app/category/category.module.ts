import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListSubCategoryComponent } from './list-sub-category/list-sub-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CategoryComponent } from './category/category.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListCategoryComponent,
    ListSubCategoryComponent,
    SubCategoryComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule
  ]
})
export class CategoryModule { }
