import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileInfo } from 'src/app/services/auth/profile-info';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { UpdatePasswordOfUtilisateurComponent } from '../update-password-of-utilisateur/update-password-of-utilisateur.component';
import { UpdateProfileOfUtilisateurComponent } from '../update-profile-of-utilisateur/update-profile-of-utilisateur.component';

@Component({
  selector: 'app-profile-utilisateur',
  templateUrl: './profile-utilisateur.component.html',
  styleUrls: ['./profile-utilisateur.component.css']
})
export class ProfileUtilisateurComponent implements OnInit {

  name = '';
  username = '';
  password = '';

  profileInfo: ProfileInfo = {} as ProfileInfo;
  listDataProfil: UtilisateurDto = new UtilisateurDto();
  email:any;

  editPhoto!: boolean;
  currentProfile: any;
  selectedFiles:any;
  progress!: number;
  currentFileUpload: any;
  title!: string;
  currentRequest!: string;
  currentTime: number = 0;
  id:any;

  userId:any;
  img!: boolean;

  constructor(private authService: AuthService,
              private tokenService: TokenStorageService,
              public toastr: ToastrService,
              public userService: UtilisateurService,
              private router: Router,
              private matDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ProfileUtilisateurComponent>,
  ) {

  }

  ngOnInit(): void {
    this.getEmploye();
    const user = this.tokenService.getUser();
    this.id = user.id
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;

    if (this.userService.getUserAvatar(this.userId) === null)
      this.img = false;
    else this.img =true;

  }

  getEmploye() {
    const user = this.tokenService.getUser();
    console.log(user.id);
    this.userService.getUtilisateurDtoById(user.id).subscribe(
      response => {
        console.log(response);
        this.listDataProfil = response;
      }
    );
  }

  getTS() {
    return this.currentTime;
  }

  onEditPhoto(p:any) {
    this.currentProfile = p;
    this.editPhoto = true;
  }

  onSelectedFile(event:any) {
    this.selectedFiles = event.target.files;
  }

  processForm() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.currentFileUpload);
    console.log(this.id);
    this.userService.uploadPhotoUtilisateur(this.currentFileUpload, this.id)
      .subscribe((event:any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.currentTime = Date.now();
        }
      }, err => {
        this.toastr.warning("Problème de chargment de la photo");
      }
    );
    this.selectedFiles = undefined;
  }

  addEditUsername(item: UtilisateurDto) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.authService.listData = Object.assign({}, item)
    this.matDialog.open(UpdateProfileOfUtilisateurComponent, dialogConfig);
  }

  addEditPassword(item: UtilisateurDto) {
    console.log(item);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.authService.listData = Object.assign({}, item)
    this.matDialog.open(UpdatePasswordOfUtilisateurComponent, dialogConfig);

  }

  logout(): void {
    this.tokenService.signOut();
    this.router.navigateByUrl('admin');
  }

  goToDashboard() {
    this.router.navigateByUrl('admin/accueil/dashborad');
  }

  addEditCustomerPassword(item: UtilisateurDto) {
    console.log(item);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.authService.listData = Object.assign({}, item);
    this.matDialog.open(UpdatePasswordOfUtilisateurComponent, dialogConfig);

  }

  editProfil(item: UtilisateurDto) {
    console.log(item);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.authService.listData = Object.assign({}, item)
    this.matDialog.open(UpdateProfileOfUtilisateurComponent, dialogConfig);
  }

  update() {
    console.log('Data send--', this.listDataProfil);
    this.userService.updateUtilisateurDto(this.listDataProfil.id, this.listDataProfil).subscribe(
      (response: UtilisateurDto) => {
        this.toastr.warning('avec succès','Informations Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/utilisateurs/profile/" + this.userId).then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    );
  }

}
