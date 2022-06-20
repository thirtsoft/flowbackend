import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-nbre-register-peer-month',
  templateUrl: './nbre-register-peer-month.component.html',
  styleUrls: ['./nbre-register-peer-month.component.css']
})
export class NbreRegisterPeerMonthComponent implements OnInit {

  Barchart: any = [];

  Linechart: any = [];

  nbreOfRegisterPeer: number[] = [];
  dateRegister: Date[] = [];

  listAnnes: any={}

  constructor(private statService: DashboardService) { }

  ngOnInit() {
    this.statService.countNumberOfRegistersPeerMonth().subscribe((result: UtilisateurDto[]) => {
      this.listAnnes = result;
      const n = 1;
      const m = 0;
      console.log(this.listAnnes);
      for (let i=0; i<this.listAnnes.length; i++) {
        this.nbreOfRegisterPeer.push(this.listAnnes[i][n]);
        this.dateRegister.push(this.listAnnes[i][m]);
      }
    //  this
      this.Linechart = new Chart('lineChartRegister', {
        type: 'line',
        data: {
          labels: this.dateRegister,

          datasets: [
            {
              data: this.nbreOfRegisterPeer,
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
