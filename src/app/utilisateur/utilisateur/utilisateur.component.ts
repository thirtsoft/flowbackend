import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  formDataUtilisateurDTO: UtilisateurDto = new UtilisateurDto();

  data: any;
  paramId :any = 0;
  mySubscription: any;

  constructor(private crudApi: UtilisateurService,
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
      this.getUtilisateruDTOById(this.paramId);
    }
  }

  getUtilisateruDTOById(id: number) {
    this.crudApi.getUtilisateurDtoById(id).subscribe(
      (response: UtilisateurDto) => {
        this.formDataUtilisateurDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onUpdateUtilisateur() {
    this.crudApi.updateUtilisateurDto(this.formDataUtilisateurDTO.id, this.formDataUtilisateurDTO).subscribe(
      (response: UtilisateurDto) => {
        this.toastr.warning('avec succès','Utilisateur Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigate(['/admin/accueil/utilisateurs']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goBack() {
    this.router.navigate(['/admin/accueil/utilisateurs']);
  }


}
