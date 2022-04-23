import { CartItem } from "./cart-item";
import { Commande, CommandeDto } from "./commande";
import { Product, ProductDto } from "./product";

export class LigneCommande {
    id: number;
    imageUrl: string;
    numero: number;
    price: number;
    quantity: number;
    productId: number;
    productName: string;
  
    commande: Commande;
  
    product: Product;
  
    constructor(cartItem: CartItem){
      this.imageUrl = cartItem.image;
      this.price = cartItem.unitPrice;
      this.quantity = cartItem.quantity;
      this.productId = cartItem.id;
      this.productName = cartItem.name;
  }
  
  }
  
  export class LigneCommandeDto {
    id: number;
    imageUrl: string;
    numero: number;
    price: number;
    quantity: number;
    productId: number;
    productName: string;
  
    commandeDto: CommandeDto;
  
    productDto: ProductDto;
  
    constructor(cartItem: CartItem){
      this.imageUrl = cartItem.image;
      this.price = cartItem.unitPrice;
      this.quantity = cartItem.quantity;
      this.productId = cartItem.id;
    }
  
  }
  