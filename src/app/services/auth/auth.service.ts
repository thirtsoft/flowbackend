import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { environment } from 'src/environments/environment';
import { ProfileInfo, UpdatePasswordInfo, UpdatePasswordUser, UpdateProfilInfo, UpdateUsernameInfo, UpdateUsernameUser } from './profile-info';
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

  apiServerUrl = environment.apiBaseUrl;

  

  loginUrl = 'http://localhost:8081/flowers/v1/auth/authenticated';

  baseUrl_1 = 'http://localhost:8081/flowers/v1';

  choixmenu : string  = 'A';
  dataForm!: FormGroup;
  listData!: UtilisateurDto;
  listDataUsername!: UpdateUsernameInfo;

  listDataProfil!: ProfileInfo;
  islogin = false ;

  profileInfo: ProfileInfo = {} as ProfileInfo;
  userId: any;
  user: any;
  currentUser = {};

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  public signUp(info: Register): Observable<Register> {
    return this.http.post<Register>(AUTH_API + 'auth/signUp', info , httpOptions);
  }

  public attemptAuth(credentials: { username: any; password: any; }): Observable<any> {
    const loginData = {
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post(this.loginUrl, loginData, httpOptions);
    this.islogin=true;
  }

  public getCurrentUser(){
    return this.http.get(AUTH_API + '/auth/currentUser');
  }

  public getCurrentLogginUser(){
    return this.http.get(AUTH_API + '/auth/currentLogginUser');
  }

  public getUserByUsername(username: string): Observable<any> {
    return this.http.get<any>(this.baseUrl_1 + `/getUserByUsername/${username}`);
  }

  public getUserById(id: any) {
    return this.http.get(`${this.baseUrl_1}/utilisateurs/${id}`);
  }

  public updateProfil(userId: number, userDTO: UpdateProfilInfo): Observable<UpdateProfilInfo> {
    return this.http.put<UpdateProfilInfo>(`${this.apiServerUrl}/utilisateurs/update/${userId}`, userDTO);
  }

  public updateCustomerProfil(item: UpdateProfilInfo): Observable<UpdateProfilInfo> {
    const urlUpdateUserProfile = (`${this.baseUrl_1}/utilisateurs/updateCustomerProfileByUsername/`);
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
    const urlUpdateUsername = (`${this.baseUrl_1}/utilisateurs/updateUsernameOfUserByUsername`);
  //  return this.http.patch<UpdateUsernameInfo>("//localhost:8081/alAmine/updateUsername", {
    return this.http.patch<UpdateUsernameInfo>(urlUpdateUsername, {
      username: item.username,
      newUsername: item.newUsername
    }, httpOptions);

  }

  public updateUsernameByUserId(item: UpdateUsernameUser): Observable<UpdateUsernameUser> {
    const urlUpdateUsername = (`${this.baseUrl_1}/utilisateurs/updateUsernameOfUserById`);
    return this.http.patch<UpdateUsernameUser>(urlUpdateUsername, {
      id: item.id,
      newUsername: item.newUsername
    }, httpOptions);

  }

  public updatePassword(item: UpdatePasswordInfo): Observable<UpdatePasswordInfo> {
    const urlUpdatePassword = (`${this.baseUrl_1}/utilisateurs/updatePasswordByUsername`);
    return this.http.patch<UpdatePasswordInfo>(urlUpdatePassword, {
      username: item.username,
      oldPassword: item.oldPassword,
      newPassword: item.newPassword
    }, httpOptions);
  }

  public updatePasswordByUserId(item: UpdatePasswordUser): Observable<UpdatePasswordUser> {
    const urlUpdatePassword = (`${this.baseUrl_1}/utilisateurs/updatePasswordByUserId`);
    return this.http.patch<UpdatePasswordUser>(urlUpdatePassword, {
      userId: item.id,
      oldPassword: item.oldPassword,
      newPassword: item.newPassword
    }, httpOptions);
  }

  public handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
