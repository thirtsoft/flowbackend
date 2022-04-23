import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientDto } from '../models/client';
import { CommandeDto } from '../models/commande';
import { FournisseurDto } from '../models/fournisseur';
import { LigneCommandeDto } from '../models/ligne-commande';
import { RatingDto } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient
  ) {}

  public getTop200LigneCommandeOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/lignecommandes/searchTopLigneCommandesOrderByIdDesc`);
  }

  public countNumberOfCommande(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/countNumberOfCommande`);
  }

  public countNumberOfOrdersInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/countNumberOfOrdersInMonth`);
  }

  public countNumberOfOrdersByStatusPending(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/countNumberOfOrdersByPendingStatus`);
  }

  public countNumberOfCommandeByDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/numberOfCommandeByDay`);
  }

  public countNumberOfCommandeByMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/numberOfCommandeByMonth`);
  }

  public sumTotaleOfCommandeInDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotalOfCommandeByDay`);
  }

  public sumTotaleOfCommandeInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotalOfCommandeByMonth`);
  }

  public sumTotaleOfCommandeInYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotalOfCommandeByYear`);
  }


  public SumTotaleOfCommandeByMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotaleOfCommandeByMonthByList`);
  }

  public SumTotaleOfOrdersByYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotaleOfCommandeByYearList`);
  }

  public countNumberOfClient(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(`${this.apiServerUrl}/clients/countNumberOfClient`);
  }

  public countNumberOfFournisseurs(): Observable<FournisseurDto[]> {
    return this.http.get<FournisseurDto[]>(`${this.apiServerUrl}/fournisseurs/countNumberOfFournisseurs`);
  }

  public countNumberOfNotification(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/notifications/countNumberOfNotification`);
  }

  public countNumberOfNotificationByProductId(noteId: string): Observable<RatingDto> {
    return this.http.get<RatingDto>(`${this.apiServerUrl}/notifications/countNumberOfNotificationByProductId/${noteId}`);
  }

}
