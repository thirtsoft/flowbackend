import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientDto } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clientDTOList!: ClientDto[];

  id!: number;
  p: number=1;
  searchText: any;

  constructor(public crudApi: ClientService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.getListClientsDTOs();
  }

  getListClientsDTOs(): void {
    this.crudApi.getAllActivesClientDTOs().subscribe(
      (response: ClientDto[]) => {
        this.clientDTOList = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Erreur lors de la récupération de la liste des clients");
      }
    );
  }

  onDeleteClient(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce client ?')) {
      this.crudApi.deleteClientDto(id).subscribe(data => {
        this.toastr.error('avec succès','client supprimé', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
          });
          this.getListClientsDTOs();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('veuillez contactez administrateur','client ne peut pas etre supprimé');
        }
      );
    }
  }


}
