export interface User {
    id: number;
    email: string;
    password : string;
    pseudo: string;
    age: number;
    role:TypeRole;
    genre:Genre;
    rayonRecherche:number;
    typeRecherche:string[];
    //position:object;
    longitude:number;
    latitude:number;
}
enum Genre{
    Masculin = "Masculin",
    Feminin = "Feminin",
    Autre = "Autre",
}
enum TypeRole{
    Jeune = "Jeune",
    Adelphe = "Adelphe",
    Modo = "Modo",
    Admin = "Admin",
}
