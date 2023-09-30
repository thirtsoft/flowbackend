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
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/search-top200-orderItems-order-by-IdDesc`);
  }

  public countNumberOfCommande(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/count-number-of-order`);
  }

  public countNumberOfOrdersInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/count-number-of-orders-in-month`);
  }

  public countNumberOfOrdersByStatusPending(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/count-number-of-orders-by-pending-status`);
  }

  public countNumberOfCommandeByDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/number-of-order-by-day`);
  }

  public countNumberOfCommandeByMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/number-of-order-by-month`);
  }

  public sumTotaleOfCommandeInDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sum-total-of-order-by-day`);
  }

  public sumTotaleOfCommandeInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sum-total-of-order-by-month`);
  }

  public sumTotaleOfCommandeInYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sum-total-of-order-by-year`);
  }

  public SumTotaleOfCommandeByMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sum-total-of-order-by-month-by-list`);
  }

  public SumTotaleOfOrdersByYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sum-total-of-order-by-year-list`);
  }

  public countNumberOfClient(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(`${this.apiServerUrl}/clients/count-number-of-client`);
  } 

  public countNumberOfRegistersInMonth(): Observable<any> {
    return this.http.get<any[]>(`${this.apiServerUrl}/utilisateurs/count-number-of-register-in-month`);
  }

  public countNumberOfRegistersPeerMonth(): Observable<UtilisateurDto[]> {
    return this.http.get<UtilisateurDto[]>(`${this.apiServerUrl}/utilisateurs/count-number-of-register-peer-month`);
  }

  public countNumberOfFournisseurs(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/fournisseurs/count-number-of-fournisseur`);
  }

  public countNumberOfRating(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}/ratings/count-number-of-rating`);
  }

  public countNumberOfRatingByProductId(noteId: string): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/ratings/count-number-of-rating-by-productId/${noteId}`);
  }

  public countNumberOfEmailRequest(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}/emails/count-number-of-email`);
  }
}
