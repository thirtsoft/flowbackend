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

  /********************* HistoriqueLoginDto ******************/

  public getHistoriqueLoginDtos(): Observable<HistoriqueLoginDto[]> {
    return this.http.get<HistoriqueLoginDto[]>(`${this.apiServerUrl}/historiqueLogins/all`);
  }

  public getALLHistoriqueLoginDtosOrderByIdDesc(): Observable<HistoriqueLoginDto[]> {
    return this.http.get<HistoriqueLoginDto[]>(`${this.apiServerUrl}/historiqueLogins/searchAllHistoriqueLoginsOrderByIdDesc`);
  }

  public getHistoriqueLoginDtoById(logHistoriqueId: number): Observable<HistoriqueLoginDto> {
    return this.http.get<HistoriqueLoginDto>(`${this.apiServerUrl}/historiqueLogins/findById/${logHistoriqueId}`);
  }

  public addHistoriqueLoginDto(histLogDto: HistoriqueLoginDto): Observable<HistoriqueLoginDto> {
    return this.http.post<HistoriqueLoginDto>(`${this.apiServerUrl}/historiqueLogins/create`, histLogDto);
  }

  public updateHistoriqueLoginDto(histLogDto: number, histLoginDto: HistoriqueLoginDto): Observable<HistoriqueLoginDto> {
    return this.http.put<HistoriqueLoginDto>(`${this.apiServerUrl}/historiqueLogins/update/${histLogDto}`, histLoginDto);
  }

  public deleteHistoriqueLoginDto(histLogDto: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/historiqueLogins/delete/${histLogDto}`);
  }

}
