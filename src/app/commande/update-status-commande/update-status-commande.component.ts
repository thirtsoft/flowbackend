import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CommandeDto } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-update-status-commande',
  templateUrl: './update-status-commande.component.html',
  styleUrls: ['./update-status-commande.component.css']
})
export class UpdateStatusCommandeComponent implements OnInit {

  commandeDTOList!: CommandeDto[];

  StatusList= ['ENCOURS','PAYEE','REJETER'];

  formData!: FormGroup;

  constructor(public crudApi: CommandeService,
              public toastr: ToastrService,
              public fb: FormBuilder,
              private router : Router,
              @Inject(MAT_DIALOG_DATA)  public data:any,
              public dialogRef:MatDialogRef<UpdateStatusCommandeComponent>,
  ) { }

  ngOnInit() {
    this.infoForm()
  }

  infoForm() {
    this.crudApi.formData = this.fb.group({
      id: [this.crudApi.formData.value.id,  [Validators.required]],
      status: [this.crudApi.formData.value.status, [Validators.required]],
    });
  }

  getListCommandeDTOs() {
    this.crudApi.getALLActivesCommandeDTOs().subscribe(
      response =>{this.commandeDTOList = response;}
    );
  }

  ResetForm() {
    this.formData.reset();
  }

  onSubmit() {
    this.crudApi.updateStatusOfCommandeDto(this.crudApi.formData.value.id,this.crudApi.formData.value.status).
    subscribe( data => {
      this.toastr.warning('avec succès','Status Commande Modifié', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
      });
      this.router.navigateByUrl("admin/accueil/commandes").then(() => {
       this.getListCommandeDTOs();
      });
    });
  }

  updateStatusAppro(){
    this.crudApi.updateStatusOfCommandeDto(this.formData.value.id,this.formData.value).
    subscribe( data => {
      this.toastr.warning('avec succès','status Modifié', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
      });
      this.getListCommandeDTOs();
      this.router.navigate(['/admin/accueil/commandes']);
    });
  }


}
