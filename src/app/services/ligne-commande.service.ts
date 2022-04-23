import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneCommandeDto } from '../models/ligne-commande';

@Injectable({
  providedIn: 'root'
})
export class orderItemservice {

  apiServerUrl = environment.apiBaseUrl;

  listData : LigneCommandeDto[];

  constructor(private http: HttpClient) {
  }
 
  /*********************** LigneCommandeDTO */

  public getLigneCommandeDtos(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/all`);
  }

  public getAllLigneCommandeDtosOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/searchAllOrderItemOrderByIdDesc`);
  }

  public getLigneCommandeDtosOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/findListArticleGroupByIdDesc`);
  }

  public getLigneCommandeDtosByCommandeId(comId: number): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/searchAllOrderItemsByOrderId/${comId}`);
  }

  public getLigneCommandeDtoById(ligneCommandeId: number): Observable<LigneCommandeDto> {
    return this.http.get<LigneCommandeDto>(`${this.apiServerUrl}/orderItems/${ligneCommandeId}`);
  }

  public addLigneCommandeDto(ligneCommandeDTO: LigneCommandeDto): Observable<LigneCommandeDto> {
    return this.http.post<LigneCommandeDto>(`${this.apiServerUrl}/orderItems/create`, ligneCommandeDTO);
  }

  public updateLigneCommandeDto(ligneCommandeDTO: LigneCommandeDto): Observable<LigneCommandeDto> {
    return this.http.put<LigneCommandeDto>(`${this.apiServerUrl}/orderItems/create`, ligneCommandeDTO);
  }

  public deleteLigneCommandeDto(ligneCommandeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/orderItems/delete/${ligneCommandeId}`);
  }

}
