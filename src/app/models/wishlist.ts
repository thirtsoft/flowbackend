import { Product, ProductDto } from "./product";
import { Utilisateur, UtilisateurDto } from "./utilisateur";

export class Wishlist {
    id: number;
    reference: string;
    nbreEtoile: string;
    description: string;
    observation: string;
  
    product: Product;

    utilisateur: Utilisateur;
}

export class WishlistDto {
    id: number;
    reference: string;
    nbreEtoile: string;
    description: string;
    observation: string;
  
    productDto: ProductDto;

    utilisateurDto: UtilisateurDto;
  
}

