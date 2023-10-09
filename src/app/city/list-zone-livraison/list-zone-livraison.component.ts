import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ZoneLivraison } from 'src/app/models/zone-livraison';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-list-zone-livraison',
  templateUrl: './list-zone-livraison.component.html',
  styleUrls: ['./list-zone-livraison.component.css']
})
export class ListZoneLivraisonComponent implements OnInit {

  zoneList?: ZoneLivraison[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id?: number;
  p : number=1;
  searchText: any;

  constructor(private crudApi: StateService,
              private tokenService: TokenStorageService,
              private router: Router,
              public toastr: ToastrService,
              private fb: FormBuilder
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
    this.getListZoneLivraisons();
  }

  getListZoneLivraisons() {
    this.crudApi.getAllActivesZoneLivraisons().subscribe(
      (response: ZoneLivraison[]) => {
        this.zoneList = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Error lors de la récupération de la liste");
      }
    );

  }

  onAddZoneLivraison() {
    this.router.navigate(['/admin/accueil/localities/zone-livraison']);
  }

  onDeleteZoneLivraison(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette zone ?')) {
      this.crudApi.deleteZoneLivraison(id).subscribe(data => {
        this.toastr.error('avec succès','Zone de livraison supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListZoneLivraisons();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error("La zone n\'est pas supprimé");
        }
      );
    }

  }

}
