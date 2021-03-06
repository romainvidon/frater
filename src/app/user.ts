export interface User {
    _id?: number;
    email: string;
    password? : string;
    pseudo: string;
    age: number;
    role:TypeRole;
    genre?:Genre;
    rayonRecherche:number;
    typeRecherche:string[];
    position:{
        longitude: number;
        latitude: number;
    };
}
export enum Genre{
    Masculin = "m",
    Feminin = "f",
    Autre = "a",
}
export enum TypeRole{
    Jeune = "jeune",
    Adelphe = "adelphe",
    Modo = "modo",
    Admin = "admin",
}
