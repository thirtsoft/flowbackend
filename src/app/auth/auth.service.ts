import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'jquery';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UtilisateurDto } from '../models/utilisateur';
import { ProfilInfo, UpdatePasswordInfo, UpdatePasswordUser, UpdateProfilInfo, UpdateUsernameInfo, UpdateUsernameUser } from './profil-info';
import { Register } from './register';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8081/flowers/v1/';

//const AUTH_API = "http://62.171.128.8:8080/dpshop-backend-0.0.1-SNAPSHOT/shop-mania/v1/";

const TOKEN_KEY = 'AuthToken';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiServerUrl = environment.apiBaseUrl;

//  apiServerUrl = "http://62.171.128.8:8080/dpshop-backend-0.0.1-SNAPSHOT/shop-mania/v1";


  loginUrl = 'http://localhost:8081/casa-solaire/v1/auth/authenticated';

//  loginUrl = "https://businesse-admin.herokuapp.com/shop-mania/v1/auth/authenticated";

//  loginUrl = "http://62.171.128.8:8080/dpshop-backend-0.0.1-SNAPSHOT/shop-mania/v1/auth/authenticated";

  choixmenu : string  = 'A';
  dataForm:  FormGroup;
  listData: UtilisateurDto;
  listDataUsername: UpdateUsernameInfo;

  listDataProfil: ProfilInfo;

  islogin = false ;

  profileInfo: ProfilInfo = {} as ProfilInfo;
  userId;
  user;
  currentUser = {};

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  public signUp(info: Register): Observable<Register> {
    return this.http.post<Register>(AUTH_API + 'auth/signUp', info , httpOptions);
  }

  public attemptAuth(credentials): Observable<any> {
    const loginData = {
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post(AUTH_API + 'auth/authenticated', loginData, httpOptions);
    this.islogin=true;
  }

  public getCurrentUser(){
    return this.http.get(AUTH_API + '/auth/currentUser');
  }

  public getCurrentLogginUser(){
    return this.http.get(AUTH_API + '/auth/currentLogginUser');
  }

  public getUserByUsername(username: string): Observable<any> {
    return this.http.get<any>(this.apiServerUrl + `/getUserByUsername/${username}`);
  }

  public getUserById(id: any) {
    return this.http.get(`${this.apiServerUrl}/utilisateurs/${id}`);
  }

  public updateProfil(userId: number, userDTO: UpdateProfilInfo): Observable<UpdateProfilInfo> {
    return this.http.put<UpdateProfilInfo>(`${this.apiServerUrl}/utilisateurs/update/${userId}`, userDTO);
  }

  public updateCustomerProfil(item: UpdateProfilInfo): Observable<UpdateProfilInfo> {
    const urlUpdateUserProfile = (`${this.apiServerUrl}/utilisateurs/updateCustomerProfileByUsername/`);
    return this.http.patch<UpdateProfilInfo>(urlUpdateUserProfile, {
      id: item.id,
      oldUsername: item.oldUsername,
      name: item.name,
      username: item.username,
      email: item.email,
      mobile: item.mobile,
    }, httpOptions);

  }


  public updateUsername(item: UpdateUsernameInfo): Observable<UpdateUsernameInfo> {
    const urlUpdateUsername = (`${this.apiServerUrl}/utilisateurs/updateUsernameOfUserByUsername`);
  //  return this.http.patch<UpdateUsernameInfo>("//localhost:8081/alAmine/updateUsername", {
    return this.http.patch<UpdateUsernameInfo>(urlUpdateUsername, {
      username: item.username,
      newUsername: item.newUsername
    }, httpOptions);

  }

  public updateUsernameByUserId(item: UpdateUsernameUser): Observable<UpdateUsernameUser> {
    const urlUpdateUsername = (`${this.apiServerUrl}/utilisateurs/updateUsernameOfUserById`);
    return this.http.patch<UpdateUsernameUser>(urlUpdateUsername, {
      id: item.id,
      newUsername: item.newUsername
    }, httpOptions);

  }

  public updatePassword(item: UpdatePasswordInfo): Observable<UpdatePasswordInfo> {
    const urlUpdatePassword = (`${this.apiServerUrl}/utilisateurs/updatePasswordByUsername`);
    return this.http.patch<UpdatePasswordInfo>(urlUpdatePassword, {
      username: item.username,
      oldPassword: item.oldPassword,
      newPassword: item.newPassword
    }, httpOptions);
  }

  public updatePasswordByUserId(item: UpdatePasswordUser): Observable<UpdatePasswordUser> {
    const urlUpdatePassword = (`${this.apiServerUrl}/utilisateurs/updatePasswordByUserId`);
    return this.http.patch<UpdatePasswordUser>(urlUpdatePassword, {
      userId: item.id,
      oldPassword: item.oldPassword,
      newPassword: item.newPassword
    }, httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }



}
