import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurDto } from 'src/app/models/fournisseur';
import { ProductDto } from 'src/app/models/product';
import { StateDto } from 'src/app/models/state';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProductService } from 'src/app/services/product.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-detail-fournisseur',
  templateUrl: './detail-fournisseur.component.html',
  styleUrls: ['./detail-fournisseur.component.css']
})
export class DetailFournisseurComponent implements OnInit {

  formDataFournisseurDTO: FournisseurDto = new FournisseurDto();
  listDataProductsDTOs!: ProductDto[];
  listDataStatesDTOs!: StateDto[];

  data:any;
  paramId :any = 0;
  mySubscription: any;
  id!: number;
  p: number=1;
  searchText: any;
  nomCompletFournisseur?: string;
  telephoneFournisseur?: string;
  emailFournisseur?: string;
  adresseFournisseur?: string;
  regionFournisseur?: string;

  constructor(private crudApi: FournisseurService,
              private statService: StateService,
              public prodService: ProductService,
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
    this.getListStatesDTOs();
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getFournisseurDTOById(this.paramId);
      this.getListProductsDTOs(this.paramId);
    }
  }

  getFournisseurDTOById(id: number) {
    this.crudApi.getFournisseurDtoById(id).subscribe(
      (response: FournisseurDto) => {
        this.formDataFournisseurDTO = response;
        this.nomCompletFournisseur = this.formDataFournisseurDTO.lastName + " " + this.formDataFournisseurDTO.firstName;
        this.telephoneFournisseur = this.formDataFournisseurDTO.telephone;
        this.emailFournisseur = this.formDataFournisseurDTO.email;
        this.adresseFournisseur = this.formDataFournisseurDTO.stateDto?.name;
        this.regionFournisseur = this.formDataFournisseurDTO.stateDto.countryDto.name
        
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la liste du fournisseur");
      }
    );

  }

  getListProductsDTOs(fournisseurId?: number) {
    this.crudApi.getProductsByFournisseurId(fournisseurId).subscribe(
      (response: ProductDto[]) => {
        this.listDataProductsDTOs = response;
      }, (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la liste des produits");
      }
    )
  }

  getListStatesDTOs() {
    this.statService.getAllActivesStatesDTOs().subscribe(
      (response: StateDto[]) => {
        this.listDataStatesDTOs = response;
      }, (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la liste des département");
      }
    )
  }


  goBack() {
    this.router.navigateByUrl("admin/accueil/fournisseurs/listFournisseurs");
  }


}
