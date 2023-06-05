// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'
import TabelaService from '@/core/tabela/TabelaService'
import { useState } from 'react'
import Time from '@/core/tabela/Time'
import { connect, Schema } from 'mongoose'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  res.status(200).json({
    tabela:"TabelaJogos"
  })

}
