import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RatingDto } from '../models/rating';
import { TokenStorageService } from './auth/token-storage.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  apiServerUrl = environment.apiBaseUrl;

  id: any;
  artId: any;

  constructor(public http: HttpClient,
              public tokenService: TokenStorageService,
              public prodService: ProductService
              ) 
        {     
  }

  public getAllActivesRatingDtos(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/search-all-active-ratings`);
  }

  public getTop4RatingOrderByCreatedDateDescByProduct(prodId: string): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/search-top4-rating-order-by-createdDateDesc-by-productId/${prodId}`);
  }

  public addRatingDto(ratDTO: RatingDto): Observable<RatingDto> {
    return this.http.post<RatingDto>(`${this.apiServerUrl}/ratings/create`, ratDTO);
  }

  public addRatingToArticle(ratDTO: RatingDto, reference: string, userId:number): Observable<RatingDto> {
    return this.http.post<RatingDto>(`${this.apiServerUrl}/ratings/create-rating-to-article-with-use?reference=${reference}&userId=${userId}`, ratDTO);
  }

  public countNumberOfRatingDto(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/count-number-of-rating`);
  }

  public countNumberOfRatingDtoByProductId(noteId: string): Observable<RatingDto> {
    return this.http.get<RatingDto>(`${this.apiServerUrl}/ratings/count-number-of-rating-by-productId/${noteId}`);
  }

  public deleteRatingDto(ratId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ratings/delete-rating/${ratId}`);
  }

  public getUserId() {
    const user = this.tokenService.getUser();
    this.id = user.id
  }
}
