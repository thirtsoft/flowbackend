import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  numberOfCommandes: any;
  numberOfCommandeInMonth: any;
  numberOfCommandeByPendingStatus: any;
  sumOfCommandeInDay: any;
  sumOfCommandeInMonth: any;
  sumOfCommandeInYear: any;
  numberOfNotificationInMonth: any;
  numberOfClients: any;
  numberOfFournisseurs: any;

  Barchart: any = [];

  NombreCommandeParMois: number[] = [];
  CommandeOfMonth: Date[] = [];

  listAnnes: any={};

  constructor(private crupdApi: DashboardService,
              private router: Router
  ){}

  ngOnInit(): void {

    this.getNumberOfClients();

    this.getNumberOfFournisseurs();

    this.getSumOfOdersInDay();

    this.getNumberOfOrders();

    this.getNumberOfOrderByPendingStatus();

    this.getNumberOfOrdersInMonth();

    this.getSumOfOdersInMonth();

    this.getSumOfOdersInYear();

    this.getNumberOfNotificationInMonth();

  }

  getNumberOfClients(): void {
    this.crupdApi.countNumberOfClient().subscribe(data => {
      this.numberOfClients = data;
      console.log(data);
    });
  }

  getNumberOfFournisseurs(): void {
    this.crupdApi.countNumberOfFournisseurs().subscribe(data => {
      this.numberOfFournisseurs = data;
    });
  }

  getNumberOfOrders(): void {
    this.crupdApi.countNumberOfCommande().subscribe(response => {
      this.numberOfCommandes = response;
    });
  }

  getNumberOfOrderByPendingStatus(): void {
    this.crupdApi.countNumberOfOrdersByStatusPending().subscribe(response => {
      this.numberOfCommandeByPendingStatus = response;
    });
  }

  getNumberOfOrdersInMonth(): void {
    this.crupdApi.countNumberOfOrdersInMonth().subscribe(response => {
      this.numberOfCommandeInMonth = response;
    });
  }

  getSumOfOdersInDay(): void {
    this.crupdApi.sumTotaleOfCommandeInDay()
      .subscribe(response => {
        console.log("Day order :" +response);
        this.sumOfCommandeInDay = response;
    });
  }

  getSumOfOdersInMonth(): void {
    this.crupdApi.sumTotaleOfCommandeInMonth().subscribe(response => {
      this.sumOfCommandeInMonth = response;
    });
  }

  getSumOfOdersInYear(): void {
    this.crupdApi.sumTotaleOfCommandeInYear()
      .subscribe(response => {
      this.sumOfCommandeInYear = response;
    });
  }

  getNumberOfNotificationInMonth(): void {
    this.crupdApi.countNumberOfRating()
      .subscribe(response => {
      this.numberOfNotificationInMonth = response;
    });
  }

  goToListOfClient() {
    this.router.navigateByUrl("admin/accueil/clients");
  }

  goToListOfCommande() {
    this.router.navigateByUrl("admin/accueil/commandes");
  }


}
