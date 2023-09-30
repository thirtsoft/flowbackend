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


  public getAllOrderITemsDtosOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/search-all-active-orderItems`);
  }

  public getLigneCommandeDtosOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/find-all-orderItems-group-by-IdDesc`);
  }

  public getTop8OrderItemsOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/search-top8-orderItems-order-by-IdDesc`);
  }

  public getTop3OrderItemsOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/search-top3-orderItems-order-by-IdDesc`);
  }

  public getLigneCommandeDtosByCommandeId(lcomId: number): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/search-all-orderItems-by-orderId/${lcomId}`);
  }

  public getLigneCommandeDtoById(lcomId: number): Observable<LigneCommandeDto> {
    return this.http.get<LigneCommandeDto>(`${this.apiServerUrl}/orderItems/findById/${lcomId}`);
  }

}
