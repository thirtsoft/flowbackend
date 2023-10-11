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
    telephone2!: string;
    telephone3!: string;
    subject!: string;
    message!: string;
    stateDto!: StateDto; 
}
