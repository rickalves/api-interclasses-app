// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PartidaService from '@/core/partidas/PartidasService';
var axios = require('axios');


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    var data = JSON.stringify({
        "collection": "partidas",
        "database": "competicao",
        "dataSource": "Cluster0",
        "filter": { "temporada": 2024 }
    });

    var config = {
        method: 'post',
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-tdjsz/endpoint/data/v1/action/findOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': process.env.API_KEY,
        },
        data: data
    };

    axios(config)
        .then(function (response: any) {
            res.setHeader("Access-Control-Allow-Headers", "*")
            res.setHeader("Access-Control-Allow-Origin", "*")
            const partidasCompleta ={
                _id:response.data.document._id,
                temporada:response.data.document.temporada,
                rodadas:{
                    grupos:PartidaService.carregaPartidasGrupos(response.data.document),
                    finais:response.data.document.rodadas.finais
                }
            } 
            res.status(200).json(partidasCompleta)
            // res.status(200).json(response.data.document)
        })
        .catch(function (error: any) {
            console.log(error);
        });
}
