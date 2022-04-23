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

  public deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/clients/delete/${clientId}`);
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

  public updateClientDto(clientDTO: ClientDto): Observable<ClientDto> {
    return this.http.put<ClientDto>(`${this.apiServerUrl}/clients/create`, clientDTO);
  }

  public deleteClientDto(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/clients/delete/${clientId}`);
  }
}
