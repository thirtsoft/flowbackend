import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtilisateurDto } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  /*********************** UtilisateurDTO ********************/

  public getUtilisateurDtos(): Observable<UtilisateurDto[]> {
    return this.http.get<UtilisateurDto[]>(`${this.apiServerUrl}/utilisateurs/all`);
  }

  public getAllUtilisateurDtosOrderByIdDesc(): Observable<UtilisateurDto[]> {
    return this.http.get<UtilisateurDto[]>(`${this.apiServerUrl}/utilisateurs/searchAllUtilisateursOrderByIdDesc`);
  }

  public getUtilisateurDtoById(userId: number): Observable<UtilisateurDto> {
    return this.http.get<UtilisateurDto>(`${this.apiServerUrl}/utilisateurs/findById/${userId}`);
  }

  public addUtilisateurDto(userDTO: UtilisateurDto): Observable<UtilisateurDto> {
    return this.http.post<UtilisateurDto>(`${this.apiServerUrl}/utilisateurs/create`, userDTO);
  }

  public updateUtilisateurDto(userId: number, userDTO: UtilisateurDto): Observable<UtilisateurDto> {
    return this.http.put<UtilisateurDto>(`${this.apiServerUrl}/utilisateurs/update/${userId}`, userDTO);
  }

  public getUserAvatar(id: number){
    return this.http.get(`${this.apiServerUrl}/utilisateurs/avatar/`+ id);
  }

  public uploadPhotoUtilisateur(file: File, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.apiServerUrl+'/utilisateurs/uploadUserPhoto/' + id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  public deleteUtilisateurDto(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/utilisateurs/delete/${userId}`);
  }

}
