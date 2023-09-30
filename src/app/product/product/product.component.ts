import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDto } from 'src/app/models/product';
import { SubCategoryDto } from 'src/app/models/sub-category';
import { ProductService } from 'src/app/services/product.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formDataProductDTO: ProductDto = new ProductDto();
  listSubCategoryData: SubCategoryDto[] = [];
  listProductsData: ProductDto[] = [];

  productPhotoFile: any;
  data:any;
  paramId :any = 0;
  mySubscription: any;

  editPhoto: boolean = false;
  currentProfile: any;
  selectedFiles:any;
  progress: any;
  currentPhotoFileUpload: any;
  currentTime: number = 0;
  id:any;

  userId:any;
  img: boolean = false;

  constructor(public crudApi: ProductService,
              public subCatService: SubCategoryService,
              private toastr: ToastrService,
  //            public dialog: MatDialog,
              private actRoute: ActivatedRoute,
              private router: Router,
  ){
    //--for reload componant
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getProductDTOById(this.paramId);
    }
    this.getListSubCategoriesDTOs();
  }

  getProductDTOById(id: number) {
    this.crudApi.getProductDTOById(id).subscribe(
      (response: ProductDto) => {
        this.formDataProductDTO = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  getListSubCategoriesDTOs() {
    this.subCatService.getAllAcvivesSubcategorieDTOs().subscribe(
      (response: SubCategoryDto[]) => {
        this.listSubCategoryData = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  getListProductsDTOs() {
    this.crudApi.getAllActivesProducts().subscribe(
      (response: ProductDto[]) => {
        this.listProductsData = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  onAddProduct() {
    this.crudApi.addProductDTO(this.formDataProductDTO).subscribe(
      (response: ProductDto) => {
        alert('Product created');
        this.toastr.success('avec succès','Produit Ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/products/listProducts").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateProduct() {
    this.crudApi.updateProductDTO(this.formDataProductDTO.id, this.formDataProductDTO).subscribe(
      (response: ProductDto) => {
        this.toastr.warning('avec succès','Product Modifié', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/products/listProducts").then(() => {
          this.getListProductsDTOs();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onSaveProductWithFile() {
    let formData = new FormData();
    this.currentPhotoFileUpload = this.productPhotoFile.item(0);
    formData.append('product', JSON.stringify(this.formDataProductDTO));
    formData.append('photoProduct', this.currentPhotoFileUpload);
    this.crudApi.addProductDTOWithPhoto(formData)
      .subscribe((response: ProductDto)=> {
        console.log('Response--', response);
        this.toastr.success('avec succès','Product Ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/products/listProducts").then(() => {
          this.getListProductsDTOs();
        });
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('du produit','Erreur lors de l\'ajout', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
      }
    );
  }

  getTS() {
    return this.currentTime;
  }

  onEditPhoto(p: any) {
    if(this.paramId  && this.paramId  > 0){
      this.paramId = p;
      this.editPhoto=true;
    }
    this.editPhoto=false;
  }

  onSelectPhotoFile(event: any) {
    this.productPhotoFile=event.target.files;
  } 

  processForm() {
    this.progress = 0;
    this.currentPhotoFileUpload = this.productPhotoFile.item(0)
    this.crudApi.uploadPhotoProductDTO(this.currentPhotoFileUpload, this.formDataProductDTO.id)
      .subscribe((event:any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
          this.toastr.success('avec succès','Photo remplacé', {
            timeOut: 1500,
            positionClass: 'toast-top-right',
          });
          this.router.navigateByUrl("admin/accueil/products/listProducts").then(() => {
            this.getListProductsDTOs();
          });
        } else if (event instanceof HttpResponse) {
          this.editPhoto=false;
          this.currentTime = Date.now();
        }
      }, err => {
        this.toastr.error("Problème de chargment de la photo");
      }
    );
    this.productPhotoFile = undefined;
  }

  goBack() {
    this.router.navigateByUrl("admin/accueil/products/listProducts").then(() => {
      this.getListProductsDTOs();
    });
  }

}
