import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistoriqueCommandeDto } from '../models/historique-commande';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueCommandeService {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu : string  = 'A';
  dataForm!: FormGroup;

  listData!: HistoriqueCommandeDto[];
  formData!: HistoriqueCommandeDto;

  constructor(private http: HttpClient) {
  }


  public getALLActivesHistoriqueCommandeDtos(): Observable<HistoriqueCommandeDto[]> {
    return this.http.get<HistoriqueCommandeDto[]>(`${this.apiServerUrl}/historiques/search-all-active-historique-commandes`);
  }

  public deleteHistoriqueCommandeDto(histComId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/historiques/delete-historique-commande/${histComId}`);
  }
}
