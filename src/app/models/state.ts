import { CountryDto } from "./country";
import { ZoneLivraison } from "./zone-livraison";

export class State {
}

export class StateDto {
    id!: number;
    name!: string;
    countryDto!: CountryDto;
    zoneLivraisonDto?: ZoneLivraison;   
}
