import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { BlogComponent } from './blog/blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListBlogComponent,
    BlogComponent,
    DetailBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule
  ]
})
export class BlogModule { }
