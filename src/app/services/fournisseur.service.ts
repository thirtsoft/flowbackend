import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FournisseurDto } from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu : string  = 'A';

  dataForm:  FormGroup;

  constructor(private http: HttpClient) {
  }

 
  /**************** FournisseurDTO  *******/

  public getFournisseurDTOs(): Observable<FournisseurDto[]> {
    return this.http.get<FournisseurDto[]>(`${this.apiServerUrl}/fournisseurs/all`);
  }

  public getFournisseurDTOsOrderByIdDesc(): Observable<FournisseurDto[]> {
    return this.http.get<FournisseurDto[]>(`${this.apiServerUrl}/fournisseurs/searchAllFournisseursOrderByIdDesc`);
  }

  public getFournisseurDtoById(fournisseurId: number): Observable<FournisseurDto> {
    return this.http.get<FournisseurDto>(`${this.apiServerUrl}/fournisseurs/findById/${fournisseurId}`);
  }

  public addFournisseurDto(fournisseurDTO: FournisseurDto): Observable<FournisseurDto> {
    return this.http.post<FournisseurDto>(`${this.apiServerUrl}/fournisseurs/create`, fournisseurDTO);
  }

  public updateFournisseurDto(fournisseurId: number, fournisseurDTO: FournisseurDto): Observable<FournisseurDto> {
    return this.http.put<FournisseurDto>(`${this.apiServerUrl}/fournisseurs/update/${fournisseurId}`, fournisseurDTO);
  }

  public deleteFournisseurDto(fournisseurId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/fournisseurs/delete/${fournisseurId}`);
  }


}
