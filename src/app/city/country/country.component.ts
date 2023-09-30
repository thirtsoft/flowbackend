import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Country, CountryDto } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  formDataCountryDTO: CountryDto = new CountryDto();
  countryListDTO?: CountryDto[] = [];

  data:any;
  paramId :any = 0;
  mySubscription: any;

  constructor(private crudApi: CountryService,
              private router: Router,
              private toastr: ToastrService,
            //  public dialog: MatDialog,
              private actRoute: ActivatedRoute,
  ){
     //--for reload componant
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.mySubscription = this.router.events.subscribe((event) => {
       if (event instanceof NavigationEnd) {
         // Trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
       }
     });
  }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getCountryDTOById(this.paramId);
    }
  }

  getCountryDTOById(id: number) {
    this.crudApi.getCountryDTOById(id).subscribe(
      (response: CountryDto) => {
        this.formDataCountryDTO = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la région");
      }
    );

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
    this.crudApi.addCountryDTO(this.formDataCountryDTO).subscribe(
      (response: CountryDto) => {
        this.toastr.success('avec succès','Région Ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/localities/countries").then(() => {
          this.getListCountriesDTOs();
        });
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de l\'ajout de la région");
      }
    );
  }

  onUpdateCountry() {
    this.crudApi.updateCountryDTO(this.formDataCountryDTO.id, this.formDataCountryDTO).subscribe(
      (response: CountryDto) => {
        this.toastr.warning('avec succès','Région Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/localities/countries").then(() => {
         this.getListCountriesDTOs();
        });
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la modification de la région");
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("admin/accueil/localities/countries");
  }


}
