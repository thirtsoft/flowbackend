import { SubCategory, SubCategoryDto } from "./sub-category";

export class Product {
    id: number;
    reference: string;
    designation: string;
    quantity: number;
    quantite: number;
    price: number;
    currentPrice: number;
    promo: boolean;
    selected: boolean;
    description: string;
    manufactured: string;
    photo: string;
  
    subCategory: SubCategory;

  
  }
  
  export class ProductDto {
    id: number;
    reference: string;
    designation: string;
    quantity: number;
    price: number;
    currentPrice: number;
    promo: boolean;
    selected: boolean;
    description: string;
    manufactured: string;
    photo: string;
    quantite: number = 1;
  
    subCategoryDto: SubCategoryDto;
  
  }
  