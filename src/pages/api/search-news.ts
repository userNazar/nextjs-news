// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NewsResponse } from '@/models';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();
  const searchQueryCount = req.query.c?.toString();
  if (!searchQuery) {
    return res.status(400).json({ error: 'Please provide a search query' })
  }

  const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}&pageSize=${searchQueryCount}`)
  const newsResponse: NewsResponse = response.data

  return res.status(200).json(newsResponse.articles)
}
