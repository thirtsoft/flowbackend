import { CountryDto } from "./country";

export class State {
}

export class StateDto {
    id!: number;
    name!: string;
  
    countryDto!: CountryDto;   
}
