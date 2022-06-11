import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryDto } from 'src/app/models/category';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categoriesListDTO!: CategoryDto[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id!: number;
  p : number=1;
  searchText:any;

  constructor(private crudApi: CategoryService,
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
    this.getListCategoriesDTOs();
  }

  getListCategoriesDTOs() {
    this.crudApi.getAllCategorieDTOByIdDesc().subscribe(
      (response: CategoryDto[]) => {
        this.categoriesListDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onAddCategory() {
    this.router.navigate(['/admin/accueil/categories/category']);
  }

  onDeleteCategory(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette Categorie ?')) {
      this.crudApi.deleteCategoryDTO(id).subscribe(data => {
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListCategoriesDTOs();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }

}
