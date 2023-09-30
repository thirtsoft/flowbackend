import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CountryDto } from 'src/app/models/country';
import { StateDto } from 'src/app/models/state';
import { CountryService } from 'src/app/services/country.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  formDataStateDTO: StateDto = new StateDto();
  listDataCountriesDTOs!: CountryDto[];
  stateListDTO?: StateDto[] = [];

  data: any;
  paramId :any = 0;
  mySubscription: any;

  constructor(private crudApi: StateService,
              private countService: CountryService,
              private statService: StateService,
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
    this.getListCountriesDTOs();
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getStateDTOById(this.paramId);
    }
  }

  getStateDTOById(id: number) {
    this.crudApi.getStateDtoById(id).subscribe(
      (response: StateDto) => {
        this.formDataStateDTO = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération du département")
      }
    );
  }

  getListStatesDTOs() {
    this.crudApi.getAllActivesStatesDTOs().subscribe(
      (response: StateDto[]) => {
        this.stateListDTO = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Error lors de la récupération de la liste");
      }
    );

  }

  getListCountriesDTOs() {
    this.countService.getAllActivesCountriesDTOsc().subscribe(
      (response: CountryDto[]) => {
        this.listDataCountriesDTOs = response;
      }, (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la list de régions");
      }
    )
  }

  onAddState() {
    this.crudApi.addStateDTO(this.formDataStateDTO).subscribe(
      (response: StateDto) => {
        this.toastr.success('avec succès','Département Ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/localities/states").then(() => {
          this.getListStatesDTOs();
        });
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de l\'ajout du département");
      }
    );
  }

  onUpdateState() {
    this.crudApi.updateStateDTO(this.formDataStateDTO.id, this.formDataStateDTO).subscribe(
      (response: StateDto) => {
        this.toastr.warning('avec succès','Département Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/localities/states").then(() => {
         this.getListStatesDTOs();
        });
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la modification du département");
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("admin/accueil/localities/states");
  }


}
