import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientDto } from '../models/client';
import { CommandeDto } from '../models/commande';
import { FournisseurDto } from '../models/fournisseur';
import { LigneCommandeDto } from '../models/ligne-commande';
import { RatingDto } from '../models/rating';
import { UtilisateurDto } from '../models/utilisateur';
import { WishlistDto } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient
  ) {}

  public getTop200LigneCommandeOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/searchTop200OrderItemsOrderByIdDesc`);
  }

  public countNumberOfCommande(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/countNumberOfOrder`);
  }

  public countNumberOfOrdersInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/countNumberOfOrdersInMonth`);
  }

  public countNumberOfOrdersByStatusPending(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/countNumberOfOrdersByPendingStatus`);
  }

  public countNumberOfCommandeByDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/numberOfCommandeByDay`);
  }

  public countNumberOfCommandeByMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/numberOfOrderByMonth`);
  }

  public sumTotaleOfCommandeInDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotalOfOrderByDay`);
  }

  public sumTotaleOfCommandeInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotalOfOrderByMonth`);
  }

  public sumTotaleOfCommandeInYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotalOfOrderByYear`);
  }

  public SumTotaleOfCommandeByMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotaleOfOrderByMonthByList`);
  }

  public SumTotaleOfOrdersByYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotaleOfOrderByYearList`);
  }

  public countNumberOfClient(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(`${this.apiServerUrl}/clients/countNumberOfClient`);
  } 

  public countNumberOfRegistersInMonth(): Observable<any> {
    return this.http.get<any[]>(`${this.apiServerUrl}/utilisateurs/countNumberOfRegisterInMonth`);
  }

  public countNumberOfRegistersPeerMonth(): Observable<UtilisateurDto[]> {
    return this.http.get<UtilisateurDto[]>(`${this.apiServerUrl}/utilisateurs/countNumberOfRegisterPeerMonth`);
  }

  public countNumberOfFournisseurs(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/fournisseurs/countNumberOfFournisseur`);
  }

  public countNumberOfRating(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}/ratings/countNumberOfRating`);
  }

  public countNumberOfRatingByProductId(noteId: string): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/ratings/countNumberOfRatingByProductId/${noteId}`);
  }

  public countNumberOfEmailRequest(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}/emails/countNumberOfEmail`);
  }
}
