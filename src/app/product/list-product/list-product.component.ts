import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDto } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productDTOList!: ProductDto[];

  id!: number;
  p: number=1;
  searchText: any;

  constructor(public crudApi: ProductService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.getListProductDTOs();
  }

  getListProductDTOs(): void {
    this.crudApi.getAllActivesProducts().subscribe(
      (response: ProductDto[]) => {
        this.productDTOList = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onAddNewProduct() {
    this.router.navigateByUrl("admin/accueil/products/product");
  }

  onDeleteProduct(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce produit ?')) {
      this.crudApi.deleteProductDTO(id).subscribe((data:any) => {
        this.toastr.error('avec succès','Produit supprimé', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
          });
          this.getListProductDTOs();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('veuillez contactez administrateur','Produit ne peut pas etre supprimé');
        }
      );
    }
  }


}
