import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurDto } from 'src/app/models/fournisseur';
import { EmailService } from 'src/app/services/email.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-mail-to-fournisseur',
  templateUrl: './mail-to-fournisseur.component.html',
  styleUrls: ['./mail-to-fournisseur.component.css']
})
export class MailToFournisseurComponent implements OnInit {

  fourDTO: FournisseurDto = new FournisseurDto();

  constructor(public crudApi: FournisseurService,
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
    subscribe( data => {
      this.toastr.success("Email Envoyé avec Succès");
      this.router.navigate(['/admin/accueil/fournisseurs']);
    });
  }


}
