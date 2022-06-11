import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { EmailService } from 'src/app/services/email.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-mail-to-utilisateur',
  templateUrl: './mail-to-utilisateur.component.html',
  styleUrls: ['./mail-to-utilisateur.component.css']
})
export class MailToUtilisateurComponent implements OnInit {

  userDTO: UtilisateurDto = new UtilisateurDto();

  constructor(public crudApi: UtilisateurService,
              private mailService: EmailService,
              public fb: FormBuilder,
              public toastr: ToastrService,
              private router : Router,
              /*
              @Inject(MAT_DIALOG_DATA)  public data,
              public dialogRef:MatDialogRef<SendEmailToChauffeurComponent>,
              */
  ) { }

  ngOnInit() {
    if (this.crudApi.choixmenu == "A"){
      this.infoForm()
    };
  }

  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: null,
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });

  }

  onSubmit() {
    this.mailService.sendMailToFournisseur(this.crudApi.dataForm.value).
    subscribe(data => {
      this.toastr.success("Email Envoyé avec Succès");
      this.router.navigate(['/admin/accueil/utilisateurs']);
    });
  }


}
