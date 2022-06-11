import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-internaute',
  templateUrl: './internaute.component.html',
  styleUrls: ['./internaute.component.css']
})
export class InternauteComponent implements OnInit {

  internauteListDTO!: UtilisateurDto[];

  id!: number;
  p : number=1;
  searchText: any;

  roles!: string[];

  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  username!: string;
  email!: String;
  userId: any;
  currentTime: number = 0;

  constructor(public crudApi: UtilisateurService,
              private tokenService: TokenStorageService,
              public toastr: ToastrService,
  //            private matDialog: MatDialog,
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

    this.getListRecruteurDTOs();
  }

  getListRecruteurDTOs(): void {
    this.crudApi.getAllUtilisateurDtosOrderByIdDesc().subscribe(
      (response: UtilisateurDto[]) => {
        this.internauteListDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ActivatedUser(item : UtilisateurDto) {
    /*
    this.crudApi.choixmenu = "M";
    this.crudApi.formData = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    this.matDialog.open(ActivatedUserComponent, dialogConfig);
    */

  }

  sendMailToEmployeur(item: UtilisateurDto) {
    /*
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    this.matDialog.open(SendMailToUtilisateurComponent, dialogConfig);
    */
  }

  getTS() {
    return this.currentTime;
  }


}
