import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistoriqueLoginDto } from '../models/historique-login';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueLoginService {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu: string  = 'A';
  dataForm!: FormGroup;

  listData!: HistoriqueLoginDto[];
  formData!: HistoriqueLoginDto;

  constructor(private http: HttpClient) {
  }

  public getALLHistoriqueLoginDtosOrderByIdDesc(): Observable<HistoriqueLoginDto[]> {
    return this.http.get<HistoriqueLoginDto[]>(`${this.apiServerUrl}/historiques/search-all-active-historique-logins`);
  }

  public deleteHistoriqueLoginDto(histLogDto: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/historiques/delete-historique-login/${histLogDto}`);
  }

}
