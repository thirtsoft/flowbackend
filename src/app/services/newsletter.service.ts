import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsletterDto } from '../models/newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu: string  = 'A';
  dataForm!: FormGroup;

  constructor(private http: HttpClient) {
  }

  /************************ NewsletterDto *******************/

  public getNewsletterDTOs(): Observable<NewsletterDto[]> {
    return this.http.get<NewsletterDto[]>(`${this.apiServerUrl}/newsletters/all`);
  }

  public getNewsletterDTOOrderByIdDesc(): Observable<NewsletterDto[]> {
    return this.http.get<NewsletterDto[]>(`${this.apiServerUrl}/newsletters/searchAllNewslettersOrderByIdDesc`);
  }

  public getNewsletterDTOById(newId: number): Observable<NewsletterDto> {
    return this.http.get<NewsletterDto>(`${this.apiServerUrl}/newsletters/findById/${newId}`);
  }

  public addNewsletterDTO(newsletDto: NewsletterDto): Observable<NewsletterDto> {
    return this.http.post<NewsletterDto>(`${this.apiServerUrl}/newsletters/create`, newsletDto);
  }

  public countNumberOfNewsletter(): Observable<NewsletterDto[]> {
    return this.http.get<NewsletterDto[]>(`${this.apiServerUrl}/newsletters/countNumberOfNewsletter`);
  }

  public deleteNewsletterDTO(newId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/newsletters/delete/${newId}`);
  }

}
