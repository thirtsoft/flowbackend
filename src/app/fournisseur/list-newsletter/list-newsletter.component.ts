import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsletterDto } from 'src/app/models/newsletter';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-list-newsletter',
  templateUrl: './list-newsletter.component.html',
  styleUrls: ['./list-newsletter.component.css']
})
export class ListNewsletterComponent implements OnInit {

  newsletterListDTO!: NewsletterDto[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id!: number;
  p : number=1;
  searchText:any;

  constructor(private crudApi: NewsletterService,
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
    this.getListNewslettersDTOs();
  }

  getListNewslettersDTOs() {
    this.crudApi.getAllActivesNewsletterDTOs().subscribe(
      (response: NewsletterDto[]) => {
        this.newsletterListDTO = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la liste");
      }
    );

  }

  sendMailToNewsletter(item: NewsletterDto) {
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

  onDeleteNewsletter(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette Newsletter ?')) {
      this.crudApi.deleteNewsletterDTO(id).subscribe(data => {
        this.toastr.error('avec succès','Newsletter supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListNewslettersDTOs();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error("Erreur lors de la suppression du newletter");
        }
      );
    }

  }

}
