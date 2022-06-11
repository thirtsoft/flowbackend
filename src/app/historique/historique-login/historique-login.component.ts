import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HistoriqueLoginDto } from 'src/app/models/historique-login';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { HistoriqueLoginService } from 'src/app/services/historique-login.service';

@Component({
  selector: 'app-historique-login',
  templateUrl: './historique-login.component.html',
  styleUrls: ['./historique-login.component.css']
})
export class HistoriqueLoginComponent implements OnInit {

  historiqueLoginListDTO!: HistoriqueLoginDto[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id!: number;
  p : number=1;
  searchText: any;

  constructor(private crudApi: HistoriqueLoginService,
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
    this.getListHistoriqueLoginsDTOs();
  }

  getListHistoriqueLoginsDTOs() {
    this.crudApi.getALLHistoriqueLoginDtosOrderByIdDesc().subscribe(
      (response: HistoriqueLoginDto[]) => {
        this.historiqueLoginListDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onDeleteHistoriqueLogin(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette HistoriqueLogin ?')) {
      this.crudApi.deleteHistoriqueLoginDto(id).subscribe(data => {
        this.toastr.error('avec succès','HistoriqueLogin supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListHistoriqueLoginsDTOs();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }


}
