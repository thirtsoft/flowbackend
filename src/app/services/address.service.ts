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

  public getAddressDTOs(): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(`${this.apiServerUrl}/addresses/all`);
  }

  public getALLAddressDTOByIdDesc(): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(`${this.apiServerUrl}/addresses/searchAllAddressOrderByIdDesc`);
  }

  public getAddressDTOById(addId: number): Observable<AddressDto> {
    return this.http.get<AddressDto>(`${this.apiServerUrl}/addresses/findById/${addId}`);
  }

  public addAddressDTO(addressDto: AddressDto): Observable<AddressDto> {
    return this.http.post<AddressDto>(`${this.apiServerUrl}/addresses/create`, addressDto);
  }

  public updateAddressDTO(addId: number, addressDTO: AddressDto): Observable<AddressDto> {
    return this.http.put<AddressDto>(`${this.apiServerUrl}/addresses/update/${addId}`, addressDTO);
  }

  public deleteAddressDTO(addId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/addresses/delete/${addId}`);
  }
}
