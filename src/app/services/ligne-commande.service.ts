import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneCommandeDto } from '../models/ligne-commande';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  apiServerUrl = environment.apiBaseUrl;

  listData: LigneCommandeDto[] = [];

  constructor(private http: HttpClient) {
  }

  /*********************** LigneCommandeDTO */

  public getLigneCommandeDtos(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/all`);
  }

  public getAllOrderITemsDtosOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/searchAllOrderItemOrderByIdDesc`);
  }

  public getLigneCommandeDtosOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/findAllOrderItemsGroupByIdDesc`);
  }

  public getTop8OrderItemsOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/searchTop8OrderItemsOrderByIdDesc`);
  }

  public getTop3OrderItemsOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/searchTop3OrderItemsOrderByIdDesc`);
  }

  public getLigneCommandeDtosByCommandeId(lcomId: number): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/searchAllOrderItemsByOrderId/${lcomId}`);
  }

  public getLigneCommandeDtoById(lcomId: number): Observable<LigneCommandeDto> {
    return this.http.get<LigneCommandeDto>(`${this.apiServerUrl}/orderItems/findById/${lcomId}`);
  }

  public addLigneCommandeDto(lComDTO: LigneCommandeDto): Observable<LigneCommandeDto> {
    return this.http.post<LigneCommandeDto>(`${this.apiServerUrl}/orderItems/create`, lComDTO);
  }

  public updateLigneCommandeDto(lcomId: number, lComDTO: LigneCommandeDto): Observable<LigneCommandeDto> {
    return this.http.put<LigneCommandeDto>(`${this.apiServerUrl}/orderItems/update/${lcomId}`, lComDTO);
  }

  public deleteLigneCommandeDto(lcomId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/orderItems/delete/${lcomId}`);
  }

}
