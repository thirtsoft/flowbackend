import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommandeDto } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-list-payed-commande',
  templateUrl: './list-payed-commande.component.html',
  styleUrls: ['./list-payed-commande.component.css']
})
export class ListPayedCommandeComponent implements OnInit {

  commandeDTOList!: CommandeDto[];

  id!: number;
  p: number=1;
  searchText: any;

  constructor(public crudApi: CommandeService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.getListOfPurchasedCommandeDTOs();
  }

  getListOfPurchasedCommandeDTOs(): void {
    this.crudApi.getCommandeDtosByStatusPurchased().subscribe(
      (response: CommandeDto[]) => {
        this.commandeDTOList = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la liste");
      }
    );
  }

  viewAllCommandes() {
    this.router.navigate(['/admin/accueil/commandes']);
  }



}
