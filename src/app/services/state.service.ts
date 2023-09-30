import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateDto } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  /**
   * StateDTO
   */

  public getAllActivesStatesDTOs(): Observable<StateDto[]> {
    return this.http.get<StateDto[]>(`${this.apiServerUrl}/states/search-all-active-states`);
  }

  public getStateDtoById(statId: number): Observable<StateDto> {
    return this.http.get<StateDto>(`${this.apiServerUrl}/states/findById/${statId}`);
  }

  public addStateDTO(state: StateDto): Observable<StateDto> {
    return this.http.post<StateDto>(`${this.apiServerUrl}/states/create`, state);
  }

  public updateStateDTO(statId: number, state: StateDto): Observable<StateDto> {
    return this.http.put<StateDto>(`${this.apiServerUrl}/states/update/${statId}`, state);
  }

  public getListStateDTOByCountryCode(code: string): Observable<StateDto[]> {
    return this.http.get<StateDto[]>(`${this.apiServerUrl}/states/search-state-by-country-code?code=`+code);
  }

  public getStateDTOByCountryCode(theCountryCode: string): Observable<any> {
    const searchStateUrl = `${this.apiServerUrl}/states/search-state-by-country-code?code=${theCountryCode}`;
    return this.http.get(searchStateUrl);
  }

  public getStates(theCountryCode: string): Observable<any> {
    const searchStateUrl = `${this.apiServerUrl}/states/search-state-by-country-code?code=${theCountryCode}`;
    return this.http.get(searchStateUrl);
  }

  public deleteStateDTO(StateId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/states/delete-state/${StateId}`);
  }

}
