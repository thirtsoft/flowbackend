import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmailDto } from 'src/app/models/email';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-list-email',
  templateUrl: './list-email.component.html',
  styleUrls: ['./list-email.component.css']
})
export class ListEmailComponent implements OnInit {

  emailListDTO!: EmailDto[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id!: number;
  p : number=1;
  searchText:any;

  constructor(private crudApi: EmailService,
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
    this.getListEmailsDTOs();
  }

  getListEmailsDTOs() {
    this.crudApi.getAllActivesEmailDTOs().subscribe(
      (response: EmailDto[]) => {
        this.emailListDTO = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la liste des email");
      }
    );
  }

  responseToMail(item: EmailDto) {
    /*
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    this.matDialog.open(ResponseMailComponent, dialogConfig);
    */
  }

  onDeleteMailDTO(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette Email ?')) {
      this.crudApi.deleteEmail(id).subscribe(data => {
        this.toastr.error('avec succès','Email supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListEmailsDTOs();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error("Erreur lors de la suppression de l\'email");
        }
      );
    }

  }


}
