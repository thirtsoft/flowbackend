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

/***************************** RatingDTO ******************************************/

  public getRatingDtos(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/all`);
  }

  public getAllRatingDtosOrderByIdDesc(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/searchAllRatingsOrderByIdDesc`);
  }

  public getTop3RatingOrderByCreatedDateDesc(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/searchTop3RatingOrderByCreatedDateDesc`);
  }

  public getTop4RatingOrderByCreatedDateDescByProduct(prodId: string): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/searchTop4RatingOrderByCreatedDateDescByProductId/${prodId}`);
  }

  public getRatingDtoById(ratId: number): Observable<RatingDto> {
    return this.http.get<RatingDto>(`${this.apiServerUrl}/ratings/findById/${ratId}`);
  }

  public addRatingDto(ratDTO: RatingDto): Observable<RatingDto> {
    return this.http.post<RatingDto>(`${this.apiServerUrl}/ratings/create`, ratDTO);
  }

  public addRatingToArticle(ratDTO: RatingDto, reference: string, userId:number): Observable<RatingDto> {
    return this.http.post<RatingDto>(`${this.apiServerUrl}/ratings/createRatingToArticleWithUser?reference=${reference}&userId=${userId}`, ratDTO);
  }

  public updateRatingDto(ratId: number, ratDTO: RatingDto): Observable<RatingDto> {
    return this.http.put<RatingDto>(`${this.apiServerUrl}/ratings/update/${ratId}`, ratDTO);
  }

  public countNumberOfRatingDto(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/countNumberOfRating`);
  }

  public countNumberOfRatingDtoByProductId(noteId: string): Observable<RatingDto> {
    return this.http.get<RatingDto>(`${this.apiServerUrl}/ratings/countNumberOfRatingByProductId/${noteId}`);
  }

  public deleteRatingDto(ratId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ratings/delete/${ratId}`);
  }

  public getUserId() {
    const user = this.tokenService.getUser();
    this.id = user.id
  }
}
