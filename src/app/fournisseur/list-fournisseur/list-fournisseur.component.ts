import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurDto } from 'src/app/models/fournisseur';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurListDTO!: FournisseurDto[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id!: number;
  p : number=1;
  searchText:any;

  constructor(private crudApi: FournisseurService,
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
    this.getListFournisseursDTOs();
  }

  getListFournisseursDTOs() {
    this.crudApi.getFournisseurDTOsOrderByIdDesc().subscribe(
      (response: FournisseurDto[]) => {
        this.fournisseurListDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onAddFournisseur() {
    this.router.navigate(['/admin/accueil/fournisseurs/fournisseur']);
  } 

  sendMailToFournisseur(item: FournisseurDto) {
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
    console.log(this.crudApi.dataForm);
    this.router.navigate(['/admin/accueil/fournisseurs/mail-to-fournisseur', this.crudApi.dataForm]);
  //  this.router.navigate(['/admin/accueil/fournisseurs/mail-to-fournisseur']);
  }

  /*
  sendMailToFournisseur(item: FournisseurDto) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    this.matDialog.open(this.sendMailToFournisseur, dialogConfig);
  }
  */


  onDeleteFournisseur(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette Fournisseur ?')) {
      this.crudApi.deleteFournisseurDto(id).subscribe(data => {
        this.toastr.error('avec succès','Fournisseur supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListFournisseursDTOs();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }


}
