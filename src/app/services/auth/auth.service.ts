import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { environment } from '../../../environments/environment';
import { ProfileInfo, UpdatePasswordInfo, UpdatePasswordUser, UpdateProfilInfo, UpdateUsernameInfo, UpdateUsernameUser } from './profile-info';
import { Register } from './register';
import { TokenStorageService } from './token-storage.service';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const NAME_KEY = 'AuthName';
const EMAIL_KEY = 'AuthEmail';
const USER_KEY = 'auth-user';
const USER_ID = 'aut-userId';

//const AUTH_API = "http://62.171.128.8:8080/dpshop-backend-0.0.1-SNAPSHOT/shop-mania/v1/";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiServerUrl = environment.apiBaseUrl;
  
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

  constructor(private http: HttpClient) {
  }
/*
  public signUp(info: Register): Observable<Register> {
    return this.http.post<Register>(AUTH_API + 'auth/signUp', info , httpOptions);
  }
  */

  signUp(info: Register): Observable<Register> {
    return this.http.post<Register>(`${this.apiServerUrl}/auth/signUp`, info , httpOptions);
  }

  /*
  public attemptAuth(credentials: { username: any; password: any; }): Observable<any> {
    const loginData = {
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post(this.loginUrl, loginData, httpOptions);
    this.islogin=true;
  }
  */

  public attemptAuth(credentials:{ username: any; password: any; }): Observable<any> {
    const loginData = {
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post(`${this.apiServerUrl}/auth/authenticated`, loginData);
    this.islogin=true;
  }

  /*
  attemptAuth(credentials:{ username: any; password: any; }) : Observable<any>{
    const loginData = {
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post<any>(
        `${this.apiServerUrl}/auth/authenticated`, {
          loginData
        }, {observe: 'response'}).pipe(
        map(
            data => {
                const token = data.headers.get("Authorization");
                console.log(data);
                console.log(loginData);
                sessionStorage.setItem(USERNAME_KEY, loginData.username);
                sessionStorage.setItem(TOKEN_KEY, `Bearer ${token}`);
                return data;
            }
        )
    );
  }*/ 

  public getCurrentUser(){
    return this.http.get(`${this.apiServerUrl}/auth/currentUser`);
  }

  public getUserByUsername(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/utilisateurs/authenticated/getUserByUsername/${username}`);
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


  public handleError(error: HttpErrorResponse) {
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
