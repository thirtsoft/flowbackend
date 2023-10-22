import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommandeDto } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {

  commandeDTOList!: CommandeDto[];

  id!: number;
  p: number=1;
  searchText: any;
  isToday: boolean = false;
  today = new Date();

  constructor(public crudApi: CommandeService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.getListCommandeDTOs();
  }

  getListCommandeDTOs(): void {
    this.crudApi.getALLActivesCommandeDTOs().subscribe(
      (response: CommandeDto[]) => {
        this.commandeDTOList = response;
        for(let i = 0; this.commandeDTOList.length; i++) {
          if (this.commandeDTOList[i].dateCommande === this.today) {
            this.isToday = true;
          }
        }
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la liste");
      }
    );
  }

  viewCommande(item: CommandeDto) {
    this.router.navigateByUrl('admin/accueil/commandes/view-Commande/' + item.id);
  }

  addEditStatusCommande(item : CommandeDto) {
    this.crudApi.choixmenu == 'M';
    this.crudApi.formData = this.fb.group(Object.assign({},item));
    this.router.navigate(['/admin/accueil/commandes/update-status', this.crudApi.formData]);
  }

  onDeleteCommande(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce commande ?')) {
      this.crudApi.deleteCommandeDTO(id).subscribe(data => {
        this.toastr.error('avec succès','commande supprimé', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
          });
          this.getListCommandeDTOs();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('veuillez contactez administrateur','commande ne peut pas etre supprimé');
        }
      );
    }
  }

}
