import { ProductDto } from "./product";

export class CartItem {
    id: number;
    name: string;
    image: string;
    unitPrice: number;
    quantity: number;
  
    constructor (productDTO: ProductDto) {
      this.id = productDTO.id;
      this.name = productDTO.designation;
      this.image = productDTO.photo;
      this.unitPrice = productDTO.price;
      this.quantity = 1;
    }
  
  
  }
