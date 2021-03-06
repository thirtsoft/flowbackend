import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryDto } from 'src/app/models/category';
import { SubCategoryDto } from 'src/app/models/sub-category';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  formDataSubCategoryDTO: SubCategoryDto = new SubCategoryDto();
  listDataCategoriesDTOs!: CategoryDto[];

  data:any;
  paramId :any = 0;
  mySubscription: any;

  constructor(private crudApi: SubCategoryService,
              private catService: CategoryService,
              private router: Router,
              private toastr: ToastrService,
            //  public dialog: MatDialog,
              private actRoute: ActivatedRoute,
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
    this.getListCategoriesDTOs();
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getSubCategoryDTOById(this.paramId);
    }
  }

  getSubCategoryDTOById(id: number) {
    this.crudApi.getSubCategoryDTOById(id).subscribe(
      (response: SubCategoryDto) => {
        this.formDataSubCategoryDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  getListCategoriesDTOs() {
    this.catService.getAllCategorieDTOs().subscribe(
      (response: CategoryDto[]) => {
        this.listDataCategoriesDTOs = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onAddSubCategory() {
    this.crudApi.addSubCategoryDTO(this.formDataSubCategoryDTO).subscribe(
      (response: SubCategoryDto) => {
        this.toastr.success('avec succ??s','SubCategory Ajout??e', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/categories/subCategories").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateSubCategory() {
    this.crudApi.updateSubCategoryDTO(this.formDataSubCategoryDTO.id, this.formDataSubCategoryDTO).subscribe(
      (response: SubCategoryDto) => {
        this.toastr.warning('avec succ??s','SubCategory Modifi??e', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/categories/subCategories").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("admin/accueil/categories/subCategories");
  }

}
