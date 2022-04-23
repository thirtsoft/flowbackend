import { State, StateDto } from "./state";

export class Address {
    id: number;
    reference: string;
    street: string;
    country: string;
    city: string;
    zipCode: string;
  
    state: State;

  }
  
  export class AddressDto {
    id: number;
    rue: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  
    stateDto: StateDto;
  
  }
