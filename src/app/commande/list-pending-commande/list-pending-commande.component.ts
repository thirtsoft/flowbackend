import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CommandeDto } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande.service';
import { UpdateStatusCommandeComponent } from '../update-status-commande/update-status-commande.component';

@Component({
  selector: 'app-list-pending-commande',
  templateUrl: './list-pending-commande.component.html',
  styleUrls: ['./list-pending-commande.component.css']
})
export class ListPendingCommandeComponent implements OnInit {

  commandeDTOList!: CommandeDto[];

  id!: number;
  p: number=1;
  searchText: any;

  constructor(public crudApi: CommandeService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder,
              private matDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<UpdateStatusCommandeComponent>,
  ){}

  ngOnInit(): void {
    this.getListOfPendingCommandeDTOs();
  }

  getListOfPendingCommandeDTOs(): void {
    this.crudApi.getCommandeDtosByStatusPending().subscribe(
      (response: CommandeDto[]) => {
        this.commandeDTOList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditStatusCommande(item : CommandeDto) {
    this.crudApi.choixmenu == 'M';
    this.crudApi.formData = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    this.matDialog.open(UpdateStatusCommandeComponent, dialogConfig);
  }

  viewAllCommandes() {
    this.router.navigate(['/admin/accueil/commandes']);
  }


}
