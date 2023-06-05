// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import TabelaService from '@/core/tabela/TabelaService';
var axios = require('axios');


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  var data = JSON.stringify({
    "collection": "tabelas",
    "database": "competicao",
    "dataSource": "Cluster0",
    "filter": {"temporada": 2023}
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
      const tabelaCompleta = TabelaService.carregaTabela(response.data.document)
      res.status(200).json(tabelaCompleta)
      
    })
    .catch(function (error: any) {
      console.log(error);
    });



}
