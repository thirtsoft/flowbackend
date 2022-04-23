import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/token-storage.service';
import { RatingDto } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  apiServerUrl = environment.apiBaseUrl;

  id: any;
  artId: any;

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService,
  ) {}
  
  /***************************** RatingDto */

  public getRatingDtos(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/all`);
  }

  public getAllRatingDtosOrderByIdDesc(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/searchAllRatingsOrderByIdDesc`);
  }

  public getTop3RatingOrderByCreatedDateDesc(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/searchTop3RatingOrderByCreatedDateDesc`);
  }

  public getTop4RatingOrderByCreatedDateDescByProduct(noteId: string): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/searchTop4RatingOrderByCreatedDateDescByProductId/${noteId}`);
  }

  public getRatingDtoById(notificationId: number): Observable<RatingDto> {
    return this.http.get<RatingDto>(`${this.apiServerUrl}/ratings/findById/${notificationId}`);
  }

  public addRatingDto(ratDto: RatingDto): Observable<RatingDto> {
    return this.http.post<RatingDto>(`${this.apiServerUrl}/ratings/create`, ratDto);
  }

  public addRatingToArticle(ratDto: RatingDto, reference: string, userId:number): Observable<RatingDto> {
    return this.http.post<RatingDto>(`${this.apiServerUrl}/ratings/createRatingToArticle?reference=${reference}&userId=${userId}`, ratDto);
  }

  public updateRatingDto(ratId: number, ratDto: RatingDto): Observable<RatingDto> {
    return this.http.put<RatingDto>(`${this.apiServerUrl}/ratings/update/${ratId}`, ratDto);
  }

  public deleteRatingDto(ratId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ratings/delete/${ratId}`);
  }

  public getUserId() {
    const user = this.tokenService.getUser();
    this.id = user.id
  }
}
