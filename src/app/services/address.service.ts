import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddressDto } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  /******         AdressDTOs **************************** */
 
  public getALLActivesAddressDTOs(): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(`${this.apiServerUrl}/addresses/search-all-active-addresses`);
  }

  public getAddressDTOById(addId: number): Observable<AddressDto> {
    return this.http.get<AddressDto>(`${this.apiServerUrl}/addresses/findById/${addId}`);
  }


  public deleteAddressDTO(addId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/addresses/delete-address/${addId}`);
  }
  
}
