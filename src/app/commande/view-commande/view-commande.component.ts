import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeDto } from 'src/app/models/commande';
import { LigneCommandeDto } from 'src/app/models/ligne-commande';
import { CommandeService } from 'src/app/services/commande.service';
import { LigneCommandeService } from 'src/app/services/ligne-commande.service';

import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import "pdfmake/build/pdfmake"
const pdfMake = window["pdfMake"];
pdfMake.vfs = pdfFonts.pdfMake.vfs

//declare var pdfMake: any;
//pdfMake.vfs = pdfFonts.pdfMake.vfs; 


@Component({
  selector: 'app-view-commande',
  templateUrl: './view-commande.component.html',
  styleUrls: ['./view-commande.component.css']
})
export class ViewCommandeComponent implements OnInit {

  listCommandeData!: CommandeDto[];
  comId!: number;
  numeroCommande:any;
  totalCommande:any;
  dateCommande:any;
  client:any;
  username: any;

  constructor(public crudApi: CommandeService,
              public lcmdService: LigneCommandeService,
              private router : Router,
              public route: ActivatedRoute,
            /*  
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<ViewCommandeComponent>,
              */
  ) { }

  ngOnInit(): void {
    this.comId = this.route.snapshot.params['id'];
    console.log(this.comId);
    this.lcmdService.getLigneCommandeDtosByCommandeId(this.comId).subscribe((data: LigneCommandeDto[]) => {
      this.lcmdService.listData = data;
      this.numeroCommande = this.lcmdService.listData[0].commandeDto.numeroCommande;
      this.totalCommande = this.lcmdService.listData[0].commandeDto.totalCommande;
      this.dateCommande = this.lcmdService.listData[0].commandeDto.dateCommande;
      this.client = this.lcmdService.listData[0].commandeDto.clientDto.firstName  + ' ' + this.lcmdService.listData[0].commandeDto.clientDto.lastName;
      this.username = this.lcmdService.listData[0].commandeDto.utilisateurDto.name;
      console.log("Username: " +this.username);
    }, err => {
      console.log(err);
    })

  }

  getListCommandeClients() {
    this.crudApi.getALLCommandeDTOs()
    .subscribe(
      response =>{
        this.listCommandeData = response;
      }
    );

  }

  OpenPdf() {
    const document : any = this.getDocument();
    pdfMake.createPdf(document).open();
  }

  PrintPdf() {
    const document : any = this.getDocument();
    pdfMake.createPdf(document).print();
  }

  DownloadPdf() {
    const document : any = this.getDocument();
    pdfMake.createPdf(document).download();
  }
  

  getDocument() {
    return {
      content: [
        {
          text: 'FLOWERS MA FLEUR - WOKITE',
          fontSize: 15,
          alignment: 'center',
          color: '#0000ff',
          decoration: 'underline',
          style: 'name',
        },
        {
          text: 'Vente de Fleurs, de Matérielles d\'Ameublements, de Semences de Fleurs',
          fontSize: 11,
          bold: true,
          color: '#0000ff',
          alignment: 'center',
        },
        {
          text: 'Carosserie - Hann-Mariste 2',
          fontSize: 9.5,
          bold: true,
          color: '#0000ff',
          alignment: 'center',
        },
        {
          text: 'Tél: +221 77 944 03 10 / Email: support@flowers.com',
          fontSize: 11,
          bold: true,
          alignment: 'center',
          color: '#0000ff'
        },
        {

        },

        {
          columns: [

             [
              {
                text: `${this.lcmdService.listData[0].commandeDto.status}`,
                fontSize: 15,
                bold: true,
                color: '#0000ff',
                margin: [0, 15, 0, 15]
              },
              {
                text: ' Facturé à : ',
                fontSize: 11,
                color: '#0000ff',
                bold: true,
                margin: [0, 7, 0, 7]
              },
              {
                text: `${ this.lcmdService.listData[0].commandeDto.clientDto.firstName + ' ' + this.lcmdService.listData[0].commandeDto.clientDto.lastName }`,
                margin: [0, 5, 0, 5],
                fontSize: 11,
              },
              {
                text: `Tél: ${this.lcmdService.listData[0].commandeDto.clientDto.mobile}`,
                margin: [0, 5, 0, 5],
                fontSize: 11,
              },
              {
                text: `Email: ${this.lcmdService.listData[0].commandeDto.clientDto.email}`,
                margin: [0, 5, 0, 5],
                fontSize: 11,
              },

            ],

            [
              {
                text: `Date : ${this.lcmdService.listData[0].commandeDto.dateCommande.toLocaleString()}`,
                alignment: 'right',
                margin: [0, 15, 0, 15]
              },
              {
                text: ' Addresse Livraison : ',
                fontSize: 11,
                color: '#0000ff',
                bold: true,
                alignment: 'right',
                margin: [0, 7, 0, 7]
              },
              {
                text: `${this.lcmdService.listData[0].commandeDto.billingAddressDto.city}`,
                alignment: 'right',
                margin: [0, 5, 0, 5],
                fontSize: 11,
              },
              {
                text: `${this.lcmdService.listData[0].commandeDto.billingAddressDto.stateDto.name}`,
                alignment: 'right',
                margin: [0, 5, 0, 5],
                fontSize: 11,
              },
              {
                text: `${this.lcmdService.listData[0].commandeDto.billingAddressDto.stateDto.countryDto.name}`,
                alignment: 'right',
                margin: [0, 5, 0, 5],
                fontSize: 11,
              },
            ],


          ]
        },

        {
          text: ' FACTURE ',
          alignment: 'center',
          fontSize: 12,
          color: '#0000ff',
          bold: true,
          margin: [0, 5, 0, 5]
        },
        {
          text: `N° : ${this.lcmdService.listData[0].commandeDto.numeroCommande}`,
          bold: true,
          fontSize: 12,
          alignment: 'center',
          color: '#0000ff',
          margin: [0, 8, 0, 8]
        },


        {
          text: `Achat effectue par :  ${this.lcmdService.listData[0].commandeDto.utilisateurDto.name}`,
          bold: true,
          fontSize: 11,
          alignment: 'left',
          margin: [0, 8, 0, 8]
        },


        {

        },

        this.getListLigneCommandes(this.lcmdService.listData),
        {

        },

        {
          text: `Total F CFA : ${this.lcmdService.listData[0].commandeDto.totalCommande}`,
          alignment: 'right',
          margin: [0, 8, 0, 8],
          bold: true,
          fontSize: 12,
        },

        {
          text: 'Signature',
          style: 'sign',
          alignment: 'right',
          decoration: 'underline',
        },


      ],

      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 14,
          bold: true
        },
        total: {
          fontSize: 12,
          bold: true,
          italics: true
        },
        ligne: {
          fontSize: 12,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
          fontSize: 14,
          alignment: 'center'
        },

      }
    };

  }

  getListLigneCommandes(item: LigneCommandeDto[]) {
    return {
      table: {
        widths: ['auto', '*', 'auto', 'auto'],
        body: [
          [
            {
              text: 'Quantité',
              style: 'tableHeader'
            },
            {
              text: 'Désignation',
              style: 'tableHeader'
            },
            {
              text: 'P.Unitaire',
              style: 'tableHeader'
            },
            {
              text: 'P.Total',
              style: 'tableHeader'
            },

          ],
          ...item.map(x => {
            return ([x.quantity, x.productName, x.price,
              (x.quantity*x.price).toFixed(2)])
          }),
          [
            {
              text: 'Montant Total',
              alignment: 'center',
              colSpan: 3
            }, {}, {},
            this.lcmdService.listData.reduce((sum, x)=> sum + (x.quantity * x.price), 0).toFixed(2)
          ]
        ]
      }
    }

  }

  onGoBack() {
    this.router.navigateByUrl('admin/accueil/commandes');
  }


}
