import { ProductDto } from "./product";
import { StateDto } from "./state";

export class Fournisseur {
}

export class FournisseurDto {
    id!: number;
    reference!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    telephone!: string;
    subject!: string;
    message!: string;

    productDto!: ProductDto;
    stateDto!: StateDto; 
}
