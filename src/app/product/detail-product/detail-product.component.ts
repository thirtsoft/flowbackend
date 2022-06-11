import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto } from 'src/app/models/product';
import { SubCategoryDto } from 'src/app/models/sub-category';
import { ProductService } from 'src/app/services/product.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  productDTO!: ProductDto;
  listSubCategoryDTO!: SubCategoryDto[];

  paramId :any = 0;

  constructor(public crudApi: ProductService,
              private subCatService: SubCategoryService,
              private router: Router,
              private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getListSubCategoriesDTO();
    this.paramId = this.route.snapshot.paramMap.get('id');
    console.log('Param--', this.paramId);
    if(this.paramId  && this.paramId  > 0){
      this.getProductDTOById(this.paramId);
    }
  }

  getProductDTOById(id: number) {
    this.crudApi.getProductDTOById(id).subscribe(
      (response: ProductDto) => {
        this.productDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  getListSubCategoriesDTO() {
    this.subCatService.getAllSubcategorieDTOs().subscribe(
      (response: SubCategoryDto[]) => {
        this.listSubCategoryDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  goBack() {
    this.router.navigate(['/admin/accueil/products/listProducts']);
  }


}
