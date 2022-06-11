import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StateDto } from 'src/app/models/state';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-list-state',
  templateUrl: './list-state.component.html',
  styleUrls: ['./list-state.component.css']
})
export class ListStateComponent implements OnInit {

  stateListDTO!: StateDto[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id!: number;
  p : number=1;
  searchText: any;

  constructor(private crudApi: StateService,
              private tokenService: TokenStorageService,
              private router: Router,
              public toastr: ToastrService,
              private fb: FormBuilder
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
    this.getListStatesDTOs();
  }

  getListStatesDTOs() {
    this.crudApi.getAllStateDTOsOrderByIdDesc().subscribe(
      (response: StateDto[]) => {
        this.stateListDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onAddState() {
    this.router.navigate(['/admin/accueil/localities/state']);
  }

  onDeleteState(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce Département ?')) {
      this.crudApi.deleteStateDTO(id).subscribe(data => {
        this.toastr.error('avec succès','State supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListStatesDTOs();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }


}
