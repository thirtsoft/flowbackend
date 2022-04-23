import { Fournisseur, FournisseurDto } from "./fournisseur";
import { Newsletter, NewsletterDto } from "./newsletter";

export class Email {
    id: number;
    customerName: string;
    recipient: string;
    subject: string;
    message: string;
    createDate: Date;
    email: string;
  
    four: Fournisseur;
  
    newsletter: Newsletter;
  
  }
  
  export class EmailDto {
    id: number;
    customerName: string;
    recipient: string;
    subject: string;
    message: string;
    createDate: Date;
  
    fournisseurDto: FournisseurDto;
  
    newsletterDto: NewsletterDto;
  
  }
