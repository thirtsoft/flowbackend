import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateDto } from '../models/state';
import { ZoneLivraison } from '../models/zone-livraison';

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

  /**     Zone de livraison */
  public getAllActivesZoneLivraisons(): Observable<ZoneLivraison[]> {
    return this.http.get<ZoneLivraison[]>(`${this.apiServerUrl}/zonelivraison/search-all-active-zone-livraisons`);
  }

  public getZoneLivraisonById(zoneId: number): Observable<ZoneLivraison> {
    return this.http.get<ZoneLivraison>(`${this.apiServerUrl}/zonelivraison/findById/${zoneId}`);
  }

  public addZoneLivraison(zone: ZoneLivraison): Observable<ZoneLivraison> {
    return this.http.post<ZoneLivraison>(`${this.apiServerUrl}/zonelivraison/create`, zone);
  }

  public updateZoneLivraison(zoneId: number, zone: ZoneLivraison): Observable<ZoneLivraison> {
    return this.http.put<ZoneLivraison>(`${this.apiServerUrl}/zonelivraison/update/${zoneId}`, zone);
  }

  public deleteZoneLivraison(zoneId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/zonelivraison/delete-zone-livraison/${zoneId}`);
  }

}
