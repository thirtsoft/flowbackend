import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FournisseurDto } from '../models/fournisseur';
import { ProductDto } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  public apiServerUrl = environment.apiBaseUrl;

  public choixmenu : string  = 'A';
  public dataForm!: FormGroup;

  constructor(private http: HttpClient) {
  }

  public getAllActivesFournisseurDTOs(): Observable<FournisseurDto[]> {
    return this.http.get<FournisseurDto[]>(`${this.apiServerUrl}/fournisseurs/search-all-active-fournisseurs`);
  }

  public getFournisseurDtoById(fournisseurId: number): Observable<FournisseurDto> {
    return this.http.get<FournisseurDto>(`${this.apiServerUrl}/fournisseurs/findById/${fournisseurId}`);
  }

  public addFournisseurDto(fourDTO: FournisseurDto): Observable<FournisseurDto> {
    return this.http.post<FournisseurDto>(`${this.apiServerUrl}/fournisseurs/create`, fourDTO);
  }

  public updateFournisseurDto(fourId: number, fourDTO: FournisseurDto): Observable<FournisseurDto> {
    return this.http.put<FournisseurDto>(`${this.apiServerUrl}/fournisseurs/update/${fourId}`, fourDTO);
  }

  public deleteFournisseurDto(fourId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/fournisseurs/delete-fournisseur/${fourId}`);
  }

  public getProductsByFournisseurId(fournisseurId?: number): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/products-by-fournisseur/${fournisseurId}`);
  }

}
