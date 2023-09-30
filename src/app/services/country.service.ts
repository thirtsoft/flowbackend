import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryDto } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  /**
   * CountryDTO
   */


  public getAllActivesCountriesDTOsc(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(`${this.apiServerUrl}/countries/search-all-active-countries`);
  }

  public getCountryDTOById(countId: number): Observable<CountryDto> {
    return this.http.get<CountryDto>(`${this.apiServerUrl}/countries/findById/${countId}`);
  }

  public addCountryDTO(countDTO: CountryDto): Observable<CountryDto> {
    return this.http.post<CountryDto>(`${this.apiServerUrl}/countries/create`, countDTO);
  }

  public updateCountryDTO(countId: number, countDTO: CountryDto): Observable<CountryDto> {
    return this.http.put<CountryDto>(`${this.apiServerUrl}/countries/update/${countId}`, countDTO);
  }

  public deleteCountryDTO(countId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/countries/delete-country/${countId}`);
  }

}
