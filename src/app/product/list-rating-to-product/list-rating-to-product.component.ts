import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RatingDto } from 'src/app/models/rating';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-list-rating-to-product',
  templateUrl: './list-rating-to-product.component.html',
  styleUrls: ['./list-rating-to-product.component.css']
})
export class ListRatingToProductComponent implements OnInit {

  ratingDTOList!: RatingDto[];

  id!: number;
  p: number=1;
  searchText: any;

  constructor(public crudApi: RatingService,
              public router: Router,
              public toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.getListRatingsDTOs();
  }

  getListRatingsDTOs(): void {
    this.crudApi.getAllRatingDtosOrderByIdDesc().subscribe(
      (response: RatingDto[]) => {
        this.ratingDTOList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteRating(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce Rating ?')) {
      this.crudApi.deleteRatingDto(id).subscribe((data:any) => {
        this.toastr.error('avec succès','Rating supprimé', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
          });
          this.getListRatingsDTOs();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('veuillez contactez administrateur','Rating ne peut pas etre supprimé');
        }
      );
    }
  }


}
