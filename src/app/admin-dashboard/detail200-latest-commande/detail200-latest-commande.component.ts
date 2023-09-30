import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LigneCommandeDto } from 'src/app/models/ligne-commande';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-detail200-latest-commande',
  templateUrl: './detail200-latest-commande.component.html',
  styleUrls: ['./detail200-latest-commande.component.css']
})
export class Detail200LAtestCommandeComponent implements OnInit {

  ligneCommandeDTOList!: LigneCommandeDto[];

  id!: number;
  p: number=1;
  searchText: any;

  constructor(public crudApi: DashboardService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.getListOfTop200LigneCommandesDTOs();
  }

  getListOfTop200LigneCommandesDTOs(): void {
    this.crudApi.getTop200LigneCommandeOrderByIdDesc().subscribe(
      (response: LigneCommandeDto[]) => {
        this.ligneCommandeDTOList = response;
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
