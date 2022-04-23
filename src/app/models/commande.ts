import { Address, AddressDto } from "./address";
import { Client, ClientDto } from "./client";
import { LigneCommande } from "./ligne-commande";
import { Utilisateur, UtilisateurDto } from "./utilisateur";

export class Commande {
    id: number;
    orderTrackingNumber: string;
    totalQuantity: number;
    numeroCommande: string;
    totalCommande: number;
    total: number;
    dateCommande: Date;
    status: string;
    sessionId: string;

    client: Client;
  
    utilisateur: Utilisateur;

    billingAddress: Address;
  
    shippingAddress: Address;

    lcomms :Array<LigneCommande>=[];
  
  }
  
  export class CommandeDto {
    id: number;
    orderTrackingNumber: string;
    totalQuantity: number;
    numeroCommande: string;
    totalCommande: number;
    total: number;
    dateCommande: Date;
    status: string;
    sessionId: string;
  
    clientDto: ClientDto;
  
    utilisateurDto: UtilisateurDto;
  
    billingAddressDto: AddressDto;
  
    shippingAddressDto: AddressDto;
  
    lcomms :Array<LigneCommande>=[];
  
  
  }
