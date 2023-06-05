import criaEstatistica from "../model/Estatisticas"

export default class EstatisticasController{

    static async cadastrarEstatisticas() {
        const estatisticaDB =  await criaEstatistica()
        let novaEstatisticas = new estatisticaDB({
            temporada:2023,
            gols:[
                {
                    nome: "Alan",
                    time: "1º AGRO",
                    gols: 8,
                    foto: "",
                },
                {
                    nome: "Pablo",
                    time: "1º AGRO",
                    gols: 3,
                    foto: "",
                },
                {
                    nome: "Iorran",
                    time: "1º AGRO",
                    gols: 4,
                    foto: "",
                },
                {
                    nome: "Guilherme",
                    time: "1º EDIF",
                    gols: 2,
                    foto: "",
                },
                {
                    nome: "Stuart",
                    time: "1º EDIF",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Welington",
                    time: "1º EDIF",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Caique",
                    time: "1º INFOR",
                    gols: 5,
                    foto: "",
                },
                {
                    nome: "P. Henrique",
                    time: "1º INFOR",
                    gols: 4,
                    foto: "",
                },
                {
                    nome: "C. Henrique",
                    time: "1º INFOR",
                    gols: 3,
                    foto: "",
                },
                {
                    nome: "Wesley",
                    time: "2º AGRO",
                    gols: 7,
                    foto: "",
                },
                {
                    nome: "Edson",
                    time: "2º AGRO",
                    gols: 6,
                    foto: "",
                },
                {
                    nome: "Wesley",
                    time: "2º AGRO",
                    gols: 5,
                    foto: "",
                },
                {
                    nome: "Juan",
                    time: "2º AGRO",
                    gols: 4,
                    foto: "",
                },
                {
                    nome: "Francisco",
                    time: "2º AGRO",
                    gols: 4,
                    foto: "",
                },
                {
                    nome: "Alisson",
                    time: "2º AGRO",
                    gols: 3,
                    foto: "",
                },
                {
                    nome: "Felipe",
                    time: "2º AGRO",
                    gols: 4,
                    foto: "",
                },
                {
                    nome: "Diego",
                    time: "2º EDIF",
                    gols: 3,
                    foto: "",
                },
                {
                    nome: "Bernado",
                    time: "2º EDIF",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Samuel",
                    time: "2º EDIF",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Lucas",
                    time: "2º EDIF",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Richard",
                    time: "2º INFOR",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "João",
                    time: "2º INFOR",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Ruan",
                    time: "3º EDIF",
                    gols: 4,
                    foto: "",
                },
                {
                    nome: "Jeferson",
                    time: "3º EDIF",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Edson",
                    time: "3º EDIF",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Pedro",
                    time: "3º AGRO",
                    gols: 4,
                    foto: "",
                },
                {
                    nome: "Fernando",
                    time: "3º AGRO",
                    gols: 2,
                    foto: "",
                },
                {
                    nome: "J. Pedro",
                    time: "3º AGRO",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "J. Gabriel",
                    time: "3º AGRO",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Luis Augusto",
                    time: "3º INFOR",
                    gols: 10,
                    foto: "",
                },
                {
                    nome: "Ian",
                    time: "3º INFOR",
                    gols: 4,
                    foto: "",
                },
                {
                    nome: "Luiz Gabriel",
                    time: "3º INFOR",
                    gols: 4,
                    foto: "",
                },
                {
                    nome: "Álvaro",
                    time: "3º INFOR",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Chaga",
                    time: "ADM",
                    gols: 6,
                    foto: "",
                },
                {
                    nome: "J. Guilherme",
                    time: "ADM",
                    gols: 2,
                    foto: "",
                },
                {
                    nome: "Alisson",
                    time: "ADM",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "César",
                    time: "ADM",
                    gols: 1,
                    foto: "",
                },
                {
                    nome: "Carlos Kauan",
                    time: "ADM",
                    gols: 1,
                    foto: "",
                },
            ],
            cartoes_amarelos:[
                {
                    nome: "C. Henrique",
                    time: "1º INFOR",
                    cartoes: 2,
                    foto: "",
                },
                {
                    nome: "Edson",
                    time: "2º AGRO",
                    cartoes: 2,
                    foto: "",
                },
                {
                    nome: "Marcelo",
                    time: "ADM",
                    cartoes: 2,
                    foto: "",
                },
                {
                    nome: "Alan",
                    time: "1º AGRO",
                    cartoes: 2,
                    foto: "",
                },
                {
                    nome: "Jeferson",
                    time: "3º EDIF",
                    cartoes: 1,
                    foto: "",
                },
                {
                    nome: "J. Guilherme",
                    time: "ADM",
                    cartoes: 1,
                    foto: "",
                },
                {
                    nome: "Diogo",
                    time: "1º EDIF",
                    cartoes: 1,
                    foto: "",
                },
                {
                    nome: "Fred",
                    time: "1º INFOR",
                    cartoes: 1,
                    foto: "",
                },
                {
                    nome: "Pedro",
                    time: "3º AGRO",
                    cartoes: 1,
                    foto: "",
                },
                {
                    nome: "Wesley",
                    time: "2º AGRO",
                    cartoes: 1,
                    foto: "",
                },
                {
                    nome: "Stuart",
                    time: "1º EDIF",
                    cartoes: 1,
                    foto: "",
                },
                {
                    nome: "Kauã",
                    time: "1º AGRO",
                    cartoes: 1,
                    foto: "",
                },
                {
                    nome: "Luis Augusto",
                    time: "3º INFOR",
                    cartoes: 1,
                    foto: "",
                },
            ],
            cartoes_vermelhos:[
            ]
        });
        
        novaEstatisticas.save()
    }
}