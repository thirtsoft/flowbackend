import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HistoriqueCommandeDto } from 'src/app/models/historique-commande';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { HistoriqueCommandeService } from 'src/app/services/historique-commande.service';

@Component({
  selector: 'app-historique-commande',
  templateUrl: './historique-commande.component.html',
  styleUrls: ['./historique-commande.component.css']
})
export class HistoriqueCommandeComponent implements OnInit {

  historiqueCommandeListDTO!: HistoriqueCommandeDto[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id!: number;
  p : number=1;
  searchText:any;

  constructor(private crudApi: HistoriqueCommandeService,
              private tokenService: TokenStorageService,
              private router: Router,
              public toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showGestionnaireBoard = this.roles.includes("ROLE_GESTIONNAIRE");
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
    this.getListHistoriqueCommandesDTOs();
  }

  getListHistoriqueCommandesDTOs() {
    this.crudApi.getALLHistoriqueCommandeDtosOrderByIdDesc().subscribe(
      (response: HistoriqueCommandeDto[]) => {
        this.historiqueCommandeListDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteHistoriqueCommande(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette HistoriqueCommande ?')) {
      this.crudApi.deleteHistoriqueCommandeDto(id).subscribe(data => {
        this.toastr.error('avec succès','HistoriqueCommande supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListHistoriqueCommandesDTOs();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }


}
