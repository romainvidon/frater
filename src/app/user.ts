export interface User {
    id?: number;
    email: string;
    password? : string;
    pseudo: string;
    age: number;
    role:TypeRole;
    genre:Genre;
    rayonRecherche:number;
    typeRecherche:string[];
    position:{
        longitude: number;
        latitude: number;
    };
}
export enum Genre{
    Masculin = "Masculin",
    Feminin = "Feminin",
    Autre = "Autre",
}
export enum TypeRole{
    Jeune = "Jeune",
    Adelphe = "Adelphe",
    Modo = "Modo",
    Admin = "Admin",
}
