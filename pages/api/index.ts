// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  lol: string
}

type Error = {
  error:string,
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    let lol = "World"
  res.status(200).json({ lol: `Hi ${lol}` })
}
