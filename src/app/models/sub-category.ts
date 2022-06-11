import { CategoryDto } from "./category";

export class SubCategory {
}

export class SubCategoryDto {
    id!: number;
    subCategoryName!: string;
    description!: string;
  
    categoryDto!: CategoryDto;   
}
