import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryDto } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  formDataCategoryDTO: CategoryDto = new CategoryDto();

  data:any;
  paramId :any = 0;
  mySubscription: any;

  constructor(private crudApi: CategoryService,
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
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getCategoryDTOById(this.paramId);
    }
  }

  getCategoryDTOById(id: number) {
    this.crudApi.getCategoryDTOById(id).subscribe(
      (response: CategoryDto) => {
        console.log('data--', response);
        this.formDataCategoryDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onAddCategory() {
    this.crudApi.addCategoryDTO(this.formDataCategoryDTO).subscribe(
      (response: CategoryDto) => {
        this.toastr.success('avec succès','Category Ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/categories").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateCategory() {
    this.crudApi.updateCategoryDTO(this.formDataCategoryDTO.id, this.formDataCategoryDTO).subscribe(
      (response: CategoryDto) => {
        this.toastr.warning('avec succès','Category Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/categories").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("admin/accueil/categories")
  }

}
