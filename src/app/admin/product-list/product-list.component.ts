import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';
import { ProductDto } from 'src/app/models/product';
import { FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { SubCategoryDto } from 'src/app/models/sub-category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [];
  modalRef: BsModalRef;
  errorMessage: string;
  name;
  id;
  key;

  productListDTOs: ProductDto[];
  formProductDTO = new ProductDto();
  subCatListDTOs: SubCategoryDto[];

  editForm: FormGroup;
  p: number = 1;
  searchText;

  constructor(
    private commonService: CommonServiceService,
    private crudApi: ProductService,
    private subCatService: SubCategoryService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getListProductsDTOsOrderDesc();
    this.formInit();
    this.getListSubCategoriesDTOsOrderDesc();
  }

  formInit() {
    /*
    this.editForm = this.fb.group({
      id: [''],
      reference: [''],
      designation: [''],
      quantity: [''],
      price: [''],
      currentPrice: [''],
      promo: [''],
      selected: [''],
      description: [''],
      manufactured: [''],
      photo: [''],
      quantite: number = 1;
      subCategoryDto: new SubCategoryDto(),
    }) */
  }

  getProducts() {
    this.commonService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  getListSubCategoriesDTOsOrderDesc() {
    this.subCatService.getSubCategoryDtos().subscribe(
      (data: SubCategoryDto[]) => {
        this.subCatListDTOs = data;
        console.log(data);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  getListProductsDTOsOrderDesc() {
    this.crudApi.getProductDtosOrderByIdDesc().subscribe(
      (data: ProductDto[]) => {
        this.productListDTOs = data;
        console.log(data);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  editModal(template: TemplateRef<any>, category: ProductDto) {
    /*
    this.id = category.id;
    this.name = category.name;
    */
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
    this.editForm.patchValue({
      id: category.id,
      reference: category.reference,
      designation: category.designation,
      quantity: category.quantity,
      price: category.price,
      currentPrice: category.currentPrice,
      promo: category.promo,
      selected: category.selected,
      description: category.description,
      manufactured: category.manufactured,
      photo: category.photo,
      subCategoryDto: category.subCategoryDto
    });

  }

  update() {
    this.crudApi.updateProductDto(this.editForm.value.id, this.editForm.value)
    .subscribe((response) => {
      this.modalRef.hide();
      this.getListProductsDTOsOrderDesc();
    });
    this.modalRef.hide();
  }
/*
  update() {
    let params = {
      id: this.id,
      key: this.key,
      speciality: this.name,
    };
    this.modalRef.hide();
  }*/

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  deleteModal(template: TemplateRef<any>, product) {
    this.id = product.id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  save() {
    this.crudApi.addProductDto(this.formProductDTO).subscribe(
      response => {
        this.modalRef.hide();
        this.getListProductsDTOsOrderDesc();
      }
    );
    this.modalRef.hide();
    this.formProductDTO = null;
  }

  deleteProductDTO() {
    this.productListDTOs = this.productListDTOs.filter((a) => a.id !== this.id);
    this.crudApi.deleteProductDto(this.id).subscribe((data) => {
      this.modalRef.hide();
      this.getListProductsDTOsOrderDesc();
    });
  }

  deleteProduct() {
    this.products = this.products.filter((a) => a.id !== this.id);
    this.commonService.deleteProduct(this.id).subscribe((data: any[]) => {
      this.modalRef.hide();
      this.getProducts();
    });
  }

  decline() {
    this.modalRef.hide();
  }
}
