import { Utilisateur } from "./utilisateur";
import { Address } from "./address";
import { Client } from "./client";
import { Commande } from "./commande";
import { LigneCommande } from './ligne-commande';

export class Purchase {
    client: Client;
    shippingAddress: Address;
    billingAddress: Address;
    commande: Commande;
    lcomms: LigneCommande[];
    utilisateur: Utilisateur;
}
