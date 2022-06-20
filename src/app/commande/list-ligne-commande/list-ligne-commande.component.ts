import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LigneCommandeDto } from 'src/app/models/ligne-commande';
import { LigneCommandeService } from 'src/app/services/ligne-commande.service';

@Component({
  selector: 'app-list-ligne-commande',
  templateUrl: './list-ligne-commande.component.html',
  styleUrls: ['./list-ligne-commande.component.css']
})
export class ListLigneCommandeComponent implements OnInit {

  ligneCommandeDTOList!: LigneCommandeDto[];

  id!: number;
  p: number=1;
  searchText: any;

  constructor(public crudApi: LigneCommandeService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.getListOfLigneCommandesDTOs();
  }

  getListOfLigneCommandesDTOs(): void {
    this.crudApi.getAllOrderITemsDtosOrderByIdDesc().subscribe(
      (response: LigneCommandeDto[]) => {
        this.ligneCommandeDTOList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  viewAllCommandes() {
    this.router.navigate(['/admin/accueil/commandes']);
  }

}
