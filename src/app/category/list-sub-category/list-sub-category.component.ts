import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubCategoryDto } from 'src/app/models/sub-category';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-list-sub-category',
  templateUrl: './list-sub-category.component.html',
  styleUrls: ['./list-sub-category.component.css']
})
export class ListSubCategoryComponent implements OnInit {

  subCategoriesListDTO!: SubCategoryDto[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id : any;
  p : number=1;
  searchText:any;

  constructor(private crudApi: SubCategoryService,
              private tokenService: TokenStorageService,
              private router: Router,
              public toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showGestionnaireBoard = this.roles.includes("ROLE_GESTIONNAIRE");
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
    this.getListSubCategoriesDTOs();
  }

  getListSubCategoriesDTOs() {
    this.crudApi.getAllSubcategorieDTOsOrderByIdDesc().subscribe(
      (response: SubCategoryDto[]) => {
        this.subCategoriesListDTO = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

  onAddSubCategory() {
    this.router.navigate(['/admin/accueil/categories/subCategory']);
  }

  onDeleteSubCategory(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette SubCategorie ?')) {
      this.crudApi.deleteSubCategoryDTO(id).subscribe(data => {
        this.toastr.error('avec succès','SubCategorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListSubCategoriesDTOs();
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      );
    }

  }

}
