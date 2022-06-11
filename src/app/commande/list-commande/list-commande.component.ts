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

  constructor(public crudApi: CommandeService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.getListCommandeDTOs();
  }

  getListCommandeDTOs(): void {
    this.crudApi.getALLCommandeDTOByIdDesc().subscribe(
      (response: CommandeDto[]) => {
        this.commandeDTOList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  viewCommande(item: CommandeDto) {
    this.router.navigateByUrl('admin/accueil/commandes/view-Commande/' + item.id);
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
