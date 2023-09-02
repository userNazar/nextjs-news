import ArticlesTable from '@/components/common/ArticlesTable'
import Layout from '@/components/layout/Layout'
import { NewsResponse } from '@/models'
import axios from 'axios'
import { GetStaticProps } from 'next/types'
import React from 'react'



export const getStaticProps: GetStaticProps<NewsResponse> = async () => {

  try {
    const response = await axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=' + process.env.NEWS_API_KEY)
    const articles = response.data

    return {
      props: { articles: articles.articles }
    }
  } catch (err) {
    console.error(err)

    return {
      props: { articles: [] }
    }
  }


}


const HomePage = (articles: NewsResponse) => {

  return (
    <Layout title='Home' description='News in the world'>
      <main className='container mx-auto px-2'>
        <ArticlesTable articles={articles} title={'News'}/>
      </main>
    </Layout>
  )
}

export default HomePage