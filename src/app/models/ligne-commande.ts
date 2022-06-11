import { Commande, CommandeDto } from "./commande";
import { Product, ProductDto } from "./product";

export class LigneCommande {
    id!: number;
    quantity!: number;
    price!: number;
    productId!: number;
    productName!: string;
  
    commande!: Commande;
    product!: Product;
}
  
export class LigneCommandeDto {
    id!: number;
    quantity!: number;
    price!: number;
    productId!: number;
    productName!: string;
  
    commandeDto!: CommandeDto;
    productDto!: ProductDto;
}
