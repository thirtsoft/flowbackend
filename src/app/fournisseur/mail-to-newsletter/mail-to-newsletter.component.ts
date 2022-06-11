import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsletterDto } from 'src/app/models/newsletter';
import { EmailService } from 'src/app/services/email.service';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-mail-to-newsletter',
  templateUrl: './mail-to-newsletter.component.html',
  styleUrls: ['./mail-to-newsletter.component.css']
})
export class MailToNewsletterComponent implements OnInit {

  newsDTO: NewsletterDto = new NewsletterDto();

  constructor(public crudApi: NewsletterService,
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
    this.mailService.sendEmailToCustomer(this.crudApi.dataForm.value).
    subscribe( data => {
      this.toastr.success("Email Envoyé avec Succès");
      this.router.navigate(['/admin/accueil/newsletters']);
    });
  }


}
