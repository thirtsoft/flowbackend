import { UtilisateurDto } from "./utilisateur";

export class Blog {
}

export class BlogDto {
    id!: number;
    title!: string;
    image!: string;
    description!: string;
    createDate!: Date;

    utilisateurDto!: UtilisateurDto;  
}

