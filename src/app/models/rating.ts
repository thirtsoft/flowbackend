import { ProductDto } from "./product";
import { UtilisateurDto } from "./utilisateur";

export class Rating {
}

export class RatingDto {
    id!: number;
    nbreEtoile!: number;
    observation!: string;
    createdDate!: Date;
  
    productDto!: ProductDto;
    utilisateurDto!: UtilisateurDto;
}
