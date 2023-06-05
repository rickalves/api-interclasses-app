// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  async function getData() {
    const res = await fetch('https://api.github.com/users/rickalves');
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }

  const dados = await getData()

  res.status(200).json(dados)

}
