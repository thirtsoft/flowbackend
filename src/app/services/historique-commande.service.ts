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

  /********************* HistoriqueCommandeDto ******************/

  public getHistoriqueCommandeDtos(): Observable<HistoriqueCommandeDto[]> {
    return this.http.get<HistoriqueCommandeDto[]>(`${this.apiServerUrl}/historiqueCommandes/all`);
  }

  public getALLHistoriqueCommandeDtosOrderByIdDesc(): Observable<HistoriqueCommandeDto[]> {
    return this.http.get<HistoriqueCommandeDto[]>(`${this.apiServerUrl}/historiqueCommandes/searchAllHistoriqueCommandesOrderByIdDesc`);
  }

  public getHistoriqueCommandeDtoById(histComId: number): Observable<HistoriqueCommandeDto> {
    return this.http.get<HistoriqueCommandeDto>(`${this.apiServerUrl}/historiqueCommandes/findById/${histComId}`);
  }

  public addHistoriqueCommandeDto(histComDto: HistoriqueCommandeDto): Observable<HistoriqueCommandeDto> {
    return this.http.post<HistoriqueCommandeDto>(`${this.apiServerUrl}/historiqueCommandes/create`, histComDto);
  }

  public updateHistoriqueCommandeDto(histComId: number, histComDto: HistoriqueCommandeDto): Observable<HistoriqueCommandeDto> {
    return this.http.put<HistoriqueCommandeDto>(`${this.apiServerUrl}/historiqueCommandes/update/${histComId}`, histComDto);
  }

  public deleteHistoriqueCommandeDto(histComId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/historiqueCommandes/delete/${histComId}`);
  }
}
