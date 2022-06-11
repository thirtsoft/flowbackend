import { UtilisateurDto } from "./utilisateur";

export class HistoriqueLogin {
}

export class HistoriqueLoginDto {
    id!: number;
    action!: string;
    status!: string;
    createdDate!: Date;
 
    utilisateurDto!: UtilisateurDto; 
}
