import { Product, ProductDto } from "./product";
import { Utilisateur, UtilisateurDto } from "./utilisateur";

export class Rating {
    id: number;
    nbreEtoile: string;
    observation: string;
    createdDate: Date;
  
    product: Product;
  
    utilisateur: Utilisateur;

  
  }
  
  export class RatingDto {
    id: number;
    nbreEtoile: number;
    observation: string;
  
    createdDate: Date;
  
    productDto: ProductDto;
  
    utilisateurDto: UtilisateurDto;
  
  
  }
  
