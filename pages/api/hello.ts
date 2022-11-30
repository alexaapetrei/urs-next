// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name?: string;
  error?: string;
  status?: number;
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let {lol} = req.query

  if(lol !== "secret") return res.status(419).json({ error:"lol" , message:"you are an idiot"});
  res.status(200).json({ name: `John ${lol}` })
}
