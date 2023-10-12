import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressDto } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-list-delivery-address',
  templateUrl: './list-delivery-address.component.html',
  styleUrls: ['./list-delivery-address.component.css']
})
export class ListDeliveryAddressComponent implements OnInit {

  addressDTOList!: AddressDto[];

  id!: number;
  p: number=1;
  searchText: any;

  constructor(public crudApi: AddressService,
              public router: Router,
              public toastr: ToastrService,
              public fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.getListAddressDTOs();
  }

  getListAddressDTOs(): void {
    this.crudApi.getALLActivesAddressDTOs().subscribe(
      (response: AddressDto[]) => {
        this.addressDTOList = response;
        console.log(this.addressDTOList);
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Error lors de la récupération de la liste");
      }
    );
  }

  onDeleteAddress(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce Address ?')) {
      this.crudApi.deleteAddressDTO(id).subscribe(data => {
        this.toastr.error('avec succès','Address supprimé', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
          });
          this.getListAddressDTOs();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('veuillez contactez administrateur','Address ne peut pas etre supprimé');
        }
      );
    }
  }


}
