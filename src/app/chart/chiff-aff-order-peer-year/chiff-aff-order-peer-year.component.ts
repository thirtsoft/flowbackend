import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CommandeDto } from 'src/app/models/commande';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-chiff-aff-order-peer-year',
  templateUrl: './chiff-aff-order-peer-year.component.html',
  styleUrls: ['./chiff-aff-order-peer-year.component.css']
})
export class ChiffAffOrderPeerYearComponent implements OnInit {

  Barchart: any = [];

  ChiffreAffaireParAnnees: number[] = [];
  Year: Date[] = [];

  listAnnes: any={}

  constructor(private statService: DashboardService) { }

  ngOnInit() {
    this.statService.SumTotaleOfOrdersByYear().subscribe((result: CommandeDto[]) => {
      this.listAnnes = result;
      const n = 1;
      const m = 0;
      console.log(this.listAnnes);
      for (let i=0; i<this.listAnnes.length; i++) {
        this.ChiffreAffaireParAnnees.push(this.listAnnes[i][n]);
        this.Year.push(this.listAnnes[i][m]);
      }
    //  this
      this.Barchart = new Chart('barChartVenteByYear', {
        type: 'bar',
        data: {
          labels: this.Year,

          datasets: [
            {
              data: this.ChiffreAffaireParAnnees,
              borderColor: '#3cb371',
              backgroundColor: "#5F9EA0",

            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });
    });
  }

}
