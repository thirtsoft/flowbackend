import { Commande, CommandeDto } from "./commande";

export class HistoriqueCommande {
    id: number;
    action: string;
    createdDate: Date;

    commande: Commande;
}

export class HistoriqueCommandeDto {
    id: number;
    action: string;
    createdDate: Date;

    commandeDto: CommandeDto;
  
}

