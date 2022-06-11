import { StateDto } from "./state";

export class Address {
}

export class AddressDto {
    id!: number;
    rue!: string;
    city!: string;
    state!: string;
    country!: string;
    zipCode!: string;
  
    stateDto!: StateDto; 
}
