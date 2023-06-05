export interface Estatisticas{
    _id?:any;
    temporada:string;
    gols:[],
    cartoes_amarelos:[],
    cartoes_vermelhos:[],
}

export interface Gols{
    _id?:any;
    nome:string;
    time:string;
    gols:number;
    foto:string 
}

export interface Cartoes{
    _id?:any;
    nome:string;
    time:string;
    cartoes:number;
    foto:string 
}