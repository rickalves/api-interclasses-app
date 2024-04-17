// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import EstatisticaService from '@/core/estatisticas/EstatitiscaService';
var axios = require('axios');


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  var data = JSON.stringify({
    "collection": "estatisticas",
    "database": "competicao",
    "dataSource": "Cluster0",
    "filter": {"temporada": 2024}
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

      const estatisticaCompleta = {
            _id:response.data.document._id,
            temporada:response.data.document.temporada,
            gols:EstatisticaService.gols(response.data.document),
            cartoes_amarelos:EstatisticaService.cartoesAmarelos(response.data.document),
            cartoes_vermelhos:EstatisticaService.cartoesVermelhos(response.data.document),
      }
      res.status(200).json(estatisticaCompleta)
    })
    .catch(function (error: any) {
      console.log(error);
    });
}
