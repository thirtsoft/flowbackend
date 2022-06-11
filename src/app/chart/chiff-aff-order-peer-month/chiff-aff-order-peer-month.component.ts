import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CommandeDto } from 'src/app/models/commande';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-chiff-aff-order-peer-month',
  templateUrl: './chiff-aff-order-peer-month.component.html',
  styleUrls: ['./chiff-aff-order-peer-month.component.css']
})
export class ChiffAffOrderPeerMonthComponent implements OnInit {

  Barchart: any = [];

  Linechart: any = [];

  ChiffreAffaireMois: number[] = [];
  VenteOfMonth: Date[] = [];

  listAnnes: any={}

  constructor(private statService: DashboardService) { }

  ngOnInit() {
    this.statService.SumTotaleOfCommandeByMonth().subscribe((result: CommandeDto[]) => {
      this.listAnnes = result;
      const n = 1;
      const m = 0;
      console.log(this.listAnnes);
      for (let i=0; i<this.listAnnes.length; i++) {
        this.ChiffreAffaireMois.push(this.listAnnes[i][n]);
        this.VenteOfMonth.push(this.listAnnes[i][m]);
      }
    //  this
      this.Linechart = new Chart('lineChart', {
        type: 'line',
        data: {
          labels: this.VenteOfMonth,

          datasets: [
            {
              data: this.ChiffreAffaireMois,
              borderColor: '#3cb371',
              backgroundColor: "#FF7F50",
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          responsive: true,
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
