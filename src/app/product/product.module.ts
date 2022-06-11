import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductRoutingModule } from './product-routing.module';

import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListRatingToProductComponent } from './list-rating-to-product/list-rating-to-product.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    DetailProductComponent,
    ListProductComponent,
    ListRatingToProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule,
  ]
})
export class ProductModule { }
