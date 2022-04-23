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

  /******************** AddressDtos ****************/

  public getAddressDtos(): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(`${this.apiServerUrl}/addresses/all`);
  }

  public getAddressDtosOrderByIdDesc(): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(`${this.apiServerUrl}/addresses/searchAllAddressOrderByIdDesc`);
  }

  public getAddressDtoById(AddressId: number): Observable<AddressDto> {
    return this.http.get<AddressDto>(`${this.apiServerUrl}/addresses/findById/${AddressId}`);
  }

  public addAddressDto(addDto: AddressDto): Observable<AddressDto> {
    return this.http.post<AddressDto>(`${this.apiServerUrl}/addresses/create`, addDto);
  }

  public updateAddressDto(AddressId: number, addDto: AddressDto): Observable<AddressDto> {
    return this.http.put<AddressDto>(`${this.apiServerUrl}/addresses/update/${AddressId}`, addDto);
  }

  public deleteAddressDto(AddressId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/addresses/delete/${AddressId}`);
  }
}
