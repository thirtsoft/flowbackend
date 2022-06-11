import { FournisseurDto } from "./fournisseur";
import { NewsletterDto } from "./newsletter";

export class Email {
}

export class EmailDto {
    id!: number;
    customerName!: string;
    recipient!: string;
    subject!: string;
    message!: string;
    createDate!: Date;

    fournisseurDto!: FournisseurDto;
    newsletterDto!: NewsletterDto; 
}
