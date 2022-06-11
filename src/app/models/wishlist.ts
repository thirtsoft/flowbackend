import { ProductDto } from "./product";
import { UtilisateurDto } from "./utilisateur";

export class Wishlist {
}


export class WishlistDto {
    id!: number;
    reference!: string;
    nombreEtoile!: string;
    observation!: string;
  
    productDto!: ProductDto;
    utilisateurDto!: UtilisateurDto; 
  }
