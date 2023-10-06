import { FournisseurDto } from "./fournisseur";
import { SubCategoryDto } from "./sub-category";

export class Product {
}

export class ProductDto {
    id!: number;
    reference!: string;
    designation!: string;
    quantity!: number;
    price!: number;
    currentPrice!: number;
    promo!: boolean;
    selected!: boolean;
    description!: string;
    manufactured!: string;
    photo!: string;

    subCategoryDto!: SubCategoryDto;
    fournisseurDto?: FournisseurDto;
}
