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
  });

  var config = {
    method: 'post',
    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-tdjsz/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'YVjXYwVXCMrQUgWzW9YcLl4uL6n9e24LN3Rqqr1zMnlCciZCspxit1QF2A5tE341',
    },
    data: data
  };

  axios(config)
    .then(function (response: any) {
      res.status(200).json(response.data)
    })
    .catch(function (error: any) {
      console.log(error);
    });



}
