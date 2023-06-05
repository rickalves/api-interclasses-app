// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import TabelaService from '@/core/tabela/TabelaService'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  TabelaService.carregaTabelaAno(2023).then(dados => res.status(200).json(dados))
  
}
