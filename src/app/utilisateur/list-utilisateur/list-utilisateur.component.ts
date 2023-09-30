import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { ActivatedUtilisateurComponent } from '../activated-utilisateur/activated-utilisateur.component';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {

  utilisateurDTOList!: UtilisateurDto[];

  id: any;
  p: number=1;
  searchText: any;

  currentTime: number = 0;
  img: any;

  constructor(public crudApi: UtilisateurService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder,
              private matDialog: MatDialog
  ){}

  ngOnInit(): void {
    this.getListUtilisateursDTOs();
    if (this.crudApi.getUserAvatar(this.id) === null)
      this.img = false;
    else this.img = true;
  }

  getListUtilisateursDTOs(): void {
    this.crudApi.getAllActivesUtilisateurDtos().subscribe(
      (response: UtilisateurDto[]) => {
        this.utilisateurDTOList = response;
        console.log(this.utilisateurDTOList);
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupréation de la liste des utilisateurs");
      }
    );
  }

  onAddNewUtilisateur() {
    this.router.navigateByUrl("admin/accueil/utilisateur");
  }

  onUpdateUtilisateur() {
    this.router.navigateByUrl("admin/accueil/utilisateur");
  }

//  ActivatedUser(item: UtilisateurDto) {}

  
  ActivatedUser(item : UtilisateurDto) {
    this.crudApi.choixmenu == 'M';
    this.crudApi.formData = this.fb.group(Object.assign({},item));
    this.router.navigate(['/admin/accueil/utilisateurs/activated-desactivated-profile', this.crudApi.formData]);
  }

 

  sendMailToEmployeur(item: UtilisateurDto) {}

  /*
  sendMailToEmployeur(item: UtilisateurDto) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    this.matDialog.open(this.sendMailToEmployeur, dialogConfig);
  }*/

  getTS() {
    return this.currentTime;
  }

  onDeleteUtilisateur(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce utilisateur ?')) {
      this.crudApi.deleteUtilisateurDto(id).subscribe(data => {
        this.toastr.error('avec succès','utilisateur supprimé', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
          });
          this.getListUtilisateursDTOs();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('veuillez contactez administrateur','utilisateur ne peut pas etre supprimé');
        }
      );
    }
  }

}
