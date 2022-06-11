import { CommandeDto } from "./commande";

export class HistoriqueCommande {
}

export class HistoriqueCommandeDto {
    id!: number;
    action!: string;
    createdDate!: Date;
 
    commandeDto!: CommandeDto; 
}
