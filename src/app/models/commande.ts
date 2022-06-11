import { AddressDto } from "./address";
import { ClientDto } from "./client";
import { UtilisateurDto } from "./utilisateur";

export class Commande {
}

export class CommandeDto {
    id!: number;
    numeroCommande!: number;
    totalCommande!: number;
    totalQuantity!: number;
    orderTrackingNumber!: string;
    status!: string;
    sessionId!: string;
    dateCommande!: Date;

    clientDto!: ClientDto;
    billingAddressDto!: AddressDto;
    utilisateurDto!: UtilisateurDto; 
}
