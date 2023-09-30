import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CountryDto } from 'src/app/models/country';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {

  countryListDTO!: CountryDto[];
  roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showGestionnaireBoard = false;
  showUserBoard = false;

  id! : number;
  p : number=1;
  searchText: any;

  constructor(private crudApi: CountryService,
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
    this.getListCountriesDTOs();
  }

  getListCountriesDTOs() {
    this.crudApi.getAllActivesCountriesDTOsc().subscribe(
      (response: CountryDto[]) => {
        this.countryListDTO = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la liste");
      }
    );

  }

  onAddCountry() {
    this.router.navigate(['/admin/accueil/localities/country']);
  }

  onDeleteCountry(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette région ?')) {
      this.crudApi.deleteCountryDTO(id).subscribe(data => {
        this.toastr.error('avec succès','Région supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.getListCountriesDTOs();
        },
        (error: HttpErrorResponse) => {
         this.toastr.warning("La région n\'est pas supprimée, veuillez réessayer encore");
        }
      );
    }

  }


}
