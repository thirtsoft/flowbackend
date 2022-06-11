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
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  formDataFournisseurDTO: FournisseurDto = new FournisseurDto();
  listDataProductsDTOs!: ProductDto[];
  listDataStatesDTOs!: StateDto[];

  data:any;
  paramId :any = 0;
  mySubscription: any;

  constructor(private crudApi: FournisseurService,
              private prodService: ProductService,
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
    this.getListProductsDTOs();
    this.getListStatesDTOs();
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getFournisseurDTOById(this.paramId);
    }
  }

  getFournisseurDTOById(id: number) {
    this.crudApi.getFournisseurDtoById(id).subscribe(
      (response: FournisseurDto) => {
        this.formDataFournisseurDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  getListProductsDTOs() {
    this.prodService.getALLProductDTOs().subscribe(
      (response: ProductDto[]) => {
        this.listDataProductsDTOs = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  getListStatesDTOs() {
    this.statService.getAllStateDTOs().subscribe(
      (response: StateDto[]) => {
        this.listDataStatesDTOs = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onAddFournisseur() {
    this.crudApi.addFournisseurDto(this.formDataFournisseurDTO).subscribe(
      (response: FournisseurDto) => {
        this.toastr.success('avec succès','Fournisseur Ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/fournisseurs/listFournisseurs").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateFournisseur() {
    this.crudApi.updateFournisseurDto(this.formDataFournisseurDTO.id, this.formDataFournisseurDTO).subscribe(
      (response: FournisseurDto) => {
        this.toastr.warning('avec succès','Fournisseur Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/fournisseurs/listFournisseurs").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("admin/accueil/fournisseurs/listFournisseurs");
  }


}
