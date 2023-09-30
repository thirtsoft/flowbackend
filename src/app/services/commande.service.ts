import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommandeDto } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu: string  = 'A';
  public formData!: FormGroup;

  constructor(private http: HttpClient) {
  }
  /**
   *    CommandeDTO
   */


  public getALLActivesCommandeDTOs(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/search-all-active-orders`);
  }

  public getCommandeDtosByStatusPending(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/find-list-order-by-status-pending`);
  }

  public getCommandeDtosByStatusPurchased(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/find-list-order-by-status-payed`);
  }

  public getCommandeDtoByUserIdOrderDesc(userId: number): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/search-order-by-userId-order-by-IdDesc/${userId}`);
  }

  public getCommandeDtoByBillingIdOrderDesc(billingAddressId: number): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/search-order-by-billing-addressIdDesc/${billingAddressId}`);
  }

  public getCommandeDtoByShippingIdOrderDesc(shippingAddressId: number): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/search-order-by-shipping-addressIdDesc/${shippingAddressId}`);
  }

  public getCommandeDTOById(comId: number): Observable<CommandeDto> {
    return this.http.get<CommandeDto>(`${this.apiServerUrl}/orders/findById/${comId}`);
  }

  public updateStatusOfCommandeDto(id: number, status: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    let data = {"status":status};
    const urlUpdateStatus = (this.apiServerUrl+"/orders/update-status-of-order/"+id+"?status="+data.status);
    return this.http.patch<any>(urlUpdateStatus, {headers: headers});
  }

  public getListCommandeDTOByCustomerPageable(clientId: number, page: number, size: number): Observable<CommandeDto[]> {
    const searchbyPriceUrl = (this.apiServerUrl+"/orders/search-orders-by-userId-by-pageable?clientId="+clientId+"&page="+page+"&size="+size);
    return this.http.get<CommandeDto[]>(searchbyPriceUrl);
  }

  public deleteCommandeDTO(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/orders/delete-order/${comId}`);
  }
}
