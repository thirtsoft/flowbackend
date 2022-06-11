import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListRatingToProductComponent } from './list-rating-to-product/list-rating-to-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'listProducts',
    component: ListProductComponent,
  },
  { 
    path: 'product', 
    component: ProductComponent 
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'detailProduct/:id',
    component: DetailProductComponent
  },
  { 
    path: 'ratings', 
    component: ListRatingToProductComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
