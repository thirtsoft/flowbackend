import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientDto } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  /************************ ClientDTO *******************/

  public getClientDTOs(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(`${this.apiServerUrl}/clients/all`);
  }

  public getClientDTOsOrderByIdDesc(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(`${this.apiServerUrl}/clients/searchAllClientsOrderByIdDesc`);
  }

  public getClientDtoById(clientId: number): Observable<ClientDto> {
    return this.http.get<ClientDto>(`${this.apiServerUrl}/clients/findById/${clientId}`);
  }

  public addClientDto(clientDTO: ClientDto): Observable<ClientDto> {
    return this.http.post<ClientDto>(`${this.apiServerUrl}/clients/create`, clientDTO);
  }

  public updateClientDto(clientId: number, clientDTO: ClientDto): Observable<ClientDto> {
    return this.http.put<ClientDto>(`${this.apiServerUrl}/clients/update/${clientId}`, clientDTO);
  }

  public deleteClientDto(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/clients/delete/${clientId}`);
  }

}
