import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UpdatePasswordInfo } from 'src/app/services/auth/profile-info';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-update-password-of-utilisateur',
  templateUrl: './update-password-of-utilisateur.component.html',
  styleUrls: ['./update-password-of-utilisateur.component.css']
})
export class UpdatePasswordOfUtilisateurComponent implements OnInit {

  formDataProfile: UpdatePasswordInfo  = new UpdatePasswordInfo();

  constructor(public crudApi: AuthService,
              private tokenService: TokenStorageService,
              public toastr: ToastrService,
              public fb: FormBuilder,
              private router : Router,
              @Inject(MAT_DIALOG_DATA)  public data:any,
              public dialogRef:MatDialogRef<UpdatePasswordOfUtilisateurComponent>,
  ) { }

  ngOnInit() {
  }

  infoForm(form?: any) {
    if (form = null)
      form.resetForm();
    this.formDataProfile = {
      username: '',
      oldPassword: '',
      newPassword: '',
    };
  }

  ResetForm() {
    this.crudApi.dataForm.reset();
  }

  onSubmit() {
    console.log(this.formDataProfile);
    this.crudApi.updatePassword(this.formDataProfile).
    subscribe( data => {
      this.dialogRef.close();
      this.toastr.warning('veuillez vous reconnectez','Votre Mot de pqsse a ete modifie avec success', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
      });
      this.logout();
      console.log(data);
    });

  }

  logout(){
    this.tokenService.signOut();
    this.router.navigateByUrl('auth/login');
  }

}
