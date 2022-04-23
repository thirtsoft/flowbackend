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

  public choixmenu : string  = 'A';

  public dataForm:  FormGroup;

  listData : HistoriqueCommandeDto[];

  formData:  HistoriqueCommandeDto;

  constructor(private http: HttpClient) {
  }

  /********************* HistoriqueCommandeDto ******************/

  public getHistoriqueCommandeDtos(): Observable<HistoriqueCommandeDto[]> {
    return this.http.get<HistoriqueCommandeDto[]>(`${this.apiServerUrl}/historiqueCommandes/all`);
  }

  public getALLHistoriqueCommandeDtosOrderByIdDesc(): Observable<HistoriqueCommandeDto[]> {
    return this.http.get<HistoriqueCommandeDto[]>(`${this.apiServerUrl}/historiqueCommandes/searchAllHistoriqueCommandesOrderByIdDesc`);
  }

  public getHistoriqueCommandeDtoById(logHistoriqueId: number): Observable<HistoriqueCommandeDto> {
    return this.http.get<HistoriqueCommandeDto>(`${this.apiServerUrl}/historiqueCommandes/findById/${logHistoriqueId}`);
  }

  public addHistoriqueCommandeDto(histComDto: HistoriqueCommandeDto): Observable<HistoriqueCommandeDto> {
    return this.http.post<HistoriqueCommandeDto>(`${this.apiServerUrl}/historiqueCommandes/create`, histComDto);
  }

  public updateHistoriqueCommandeDto(scategoryId: number, histComDto: HistoriqueCommandeDto): Observable<HistoriqueCommandeDto> {
    return this.http.put<HistoriqueCommandeDto>(`${this.apiServerUrl}/historiqueCommandes/update/${scategoryId}`, histComDto);
  }

  public deleteHistoriqueCommandeDto(scategoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/historiqueCommandes/delete/${scategoryId}`);
  }
}
