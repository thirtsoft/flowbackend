import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ZoneLivraison } from 'src/app/models/zone-livraison';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-zone-livraison',
  templateUrl: './zone-livraison.component.html',
  styleUrls: ['./zone-livraison.component.css']
})
export class ZoneLivraisonComponent implements OnInit {

  zoneLivraison: ZoneLivraison = {};
  zoneLivraisons?: ZoneLivraison[] = [];
  data: any;
  paramId :any = 0;
  mySubscription: any;

  constructor(private crudApi: StateService,
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
      this.getZoneLivraisonById(this.paramId);
    }
  }

  getZoneLivraisonById(id: number) {
    this.crudApi.getZoneLivraisonById(id).subscribe(
      (response: ZoneLivraison) => {
        this.zoneLivraison = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la zone de livraison")
      }
    );
  }

  getListZoneLivraisons() {
    this.crudApi.getAllActivesZoneLivraisons().subscribe(
      (response: ZoneLivraison[]) => {
        this.zoneLivraisons = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Error lors de la récupération de la liste");
      }
    );

  }

  onAddZoneLivraison() {
    this.crudApi.addZoneLivraison(this.zoneLivraison).subscribe(
      (response: ZoneLivraison) => {
        this.toastr.success('avec succès','Zone de livraison ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/localities/zone-livraisons").then(() => {
          this.getListZoneLivraisons();
        });
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de l\'ajout du département");
      }
    );
  }

  onUpdateZoneLivraison() {
    this.crudApi.updateZoneLivraison(this.paramId, this.zoneLivraison).subscribe(
      (response: ZoneLivraison) => {
        this.toastr.warning('avec succès','Zone de livraison modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("admin/accueil/localities/zone-livraisons").then(() => {
         this.getListZoneLivraisons();
        });
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la modification de la zone de livraison");
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("admin/accueil/localities/zone-livraisons");
  }

}
