import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateDto } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu : string  = 'A';

  listData : StateDto[];

  formData:  StateDto;

  dataForm:  FormGroup;

  constructor(private http: HttpClient) {
  }
  /***************************** StateDTO    *************/

  public getStateDTOs(): Observable<StateDto[]> {
    return this.http.get<StateDto[]>(`${this.apiServerUrl}/states/all`);
  }

  public getAllStateDTOsOrderByIdDesc(): Observable<StateDto[]> {
    return this.http.get<StateDto[]>(`${this.apiServerUrl}/states/searchAllStatesOrderByIdDesc`);
  }

  public getStateDtoById(statId: number): Observable<StateDto> {
    return this.http.get<StateDto>(`${this.apiServerUrl}/states/findById/${statId}`);
  }

  public addStateDto(stateDto: StateDto): Observable<StateDto> {
    return this.http.post<StateDto>(`${this.apiServerUrl}/states/create`, stateDto);
  }

  public updateStateDto(statId: number, stateDto: StateDto): Observable<StateDto> {
    return this.http.put<StateDto>(`${this.apiServerUrl}/states/update/${statId}`, stateDto);
  }

  public deleteStateDto(statId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/states/delete/${statId}`);
  }

}
