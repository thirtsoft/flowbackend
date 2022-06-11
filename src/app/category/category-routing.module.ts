import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListSubCategoryComponent } from './list-sub-category/list-sub-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';

const routes: Routes = [
  {
    path: '',
    component: ListCategoryComponent,
  },
  { 
    path: 'category', 
    component: CategoryComponent 
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  },
  { 
    path: 'subCategories', 
    component: ListSubCategoryComponent 
  },
  { 
    path: 'subCategory', 
    component: SubCategoryComponent 
  },
  {
    path: 'subCategory/:id',
    component: SubCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
