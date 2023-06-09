import criaPartidas from "../model/Partidas"

export default class PartidaController{

    static async cadastrarPartidas(){
        const partidasDB =  await criaPartidas()
        let novaPartida = new partidasDB({
            temporada:2023,
            rodadas:[
                [
                  {
                    timeA: "2º EDIF",
                    timeB: "1º AGRO",
                    placarA: 3,
                    placarB: 3,
                    data:"29/04/2023",
                    hora:"12:15",
                    finalizado: true,
                    vencedor:"",
                  },
                  {
                    timeA: "3º AGRO",
                    timeB: "3º EDIF",
                    placarA: 1,
                    placarB: 1,
                    data:"29/04/2023",
                    hora:"12:15",
                    finalizado: true,
                    vencedor:"",
                  },
                  {
                    timeA: "3º INFOR",
                    timeB: "ADM",
                    placarA: 2,
                    placarB: 3,
                    data:"29/04/2023",
                    hora:"12:15",
                    finalizado: true,
                    vencedor:"B",
                  },
                  {
                    timeA: "2º INFOR",
                    timeB: "2º AGRO",
                    placarA: 0,
                    placarB: 10,
                    data:"29/04/2023",
                    hora:"12:15",
                    finalizado: true,
                    vencedor:"B",
                  },
                  {
                    timeA: "1º INFOR",
                    timeB: "1º EDIF",
                    placarA: 3,
                    placarB: 1,
                    data:"29/04/2023",
                    hora:"12:15",
                    finalizado: true,
                    vencedor:"B",
                  },      
                ],
                [
                    {
                      timeA: "2º AGRO",
                      timeB: "3º AGRO",
                      placarA: 5,
                      placarB: 2,
                      data:"02/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"A",
                    },
                    {
                      timeA: "1º EDIF",
                      timeB: "2º EDIF",
                      placarA: 2,
                      placarB: 0,
                      data:"04/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"A",
                    },
                    {
                      timeA: "1º AGRO",
                      timeB: "1º INFOR",
                      placarA: 2,
                      placarB: 1,
                      data:"09/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"A",
                    },
                    {
                      timeA: "2º INFOR",
                      timeB: "3º INFOR",
                      placarA: 1,
                      placarB: 7,
                      data:"11/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"B",
                    },
                    {
                      timeA: "ADM",
                      timeB: "3º EDIF",
                      placarA: 2,
                      placarB: 0,
                      data:"16/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"A",
                    },      
                  ],
                  [
                    {
                      timeA: "2º AGRO",
                      timeB: "3º INFOR",
                      placarA: 3,
                      placarB: 3,
                      data:"18/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"",
                    },
                    {
                      timeA: "1º EDIF",
                      timeB: "3º AGRO",
                      placarA: 1,
                      placarB: 2,
                      data:"23/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"B",
                    },
                    {
                      timeA: "2º INFOR",
                      timeB: "2º EDIF",
                      placarA: 1,
                      placarB: 3,
                      data:"25/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"B",
                    },
                    {
                      timeA: "ADM",
                      timeB: "1º AGRO",
                      placarA: 2,
                      placarB: 4,
                      data:"25/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"B",
                    },
                    {
                      timeA: "3º EDIF",
                      timeB: "1º INFOR",
                      placarA: 3,
                      placarB: 3,
                      data:"25/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"",
                    },      
                  ],
                  [
                    {
                      timeA: "1º INFOR",
                      timeB: "2º INFOR",
                      placarA: 4,
                      placarB: 0,
                      data:"30/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"A",
                    },
                    {
                      timeA: "3º INFOR",
                      timeB: "3º AGRO",
                      placarA: 3,
                      placarB: 3,
                      data:"30/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"",
                    },
                    {
                      timeA: "1º AGRO",
                      timeB: "2º AGRO",
                      placarA: 3,
                      placarB: 4,
                      data:"30/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"B",
                    },
                    {
                      timeA: "ADM",
                      timeB: "2º EDIF",
                      placarA: 5,
                      placarB: 1,
                      data:"30/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"A",
                    },
                    {
                      timeA: "3º EDIF",
                      timeB: "1º EDIF",
                      placarA: 2,
                      placarB: 0,
                      data:"30/05/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"A",
                    },      
                  ],
                  [
                    {
                      timeA: "2º INFOR",
                      timeB: "1º AGRO",
                      placarA: 0,
                      placarB: 3,
                      data:"01/06/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"B",
                    },
                    {
                      timeA: "2º AGRO",
                      timeB: "1º EDIF",
                      placarA: 11,
                      placarB: 1,
                      data:"01/06/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"A",
                    },
                    {
                      timeA: "3º EDIF",
                      timeB: "3º INFOR",
                      placarA: 2,
                      placarB: 6,
                      data:"01/06/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"B",
                    },
                    {
                      timeA: "3º AGRO",
                      timeB: "ADM",
                      placarA: 1,
                      placarB: 6,
                      data:"05/06/2023",
                      hora:"12:15",
                      finalizado: true,
                      vencedor:"B",
                    },
                    {
                      timeA: "2º EDIF",
                      timeB: "1º INFOR",
                      placarA: 0,
                      placarB: 0,
                      data:"06/06/2023",
                      hora:"12:15",
                      finalizado: false,
                      vencedor:"",
                    },      
                  ],
            ]
        });
        novaPartida.save()
    }
}