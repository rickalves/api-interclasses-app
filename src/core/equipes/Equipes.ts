export interface Equipes{
    _id?:any;
    temporada:number;
    equipes:[];
}

export interface Equipe{
    nome:string;
    escalacao:[];
}

export interface Jogador{
    nome:string;
    foto:string;
    goleiro:boolean;
    capitao:boolean;
}

