import ArticlesTable from '@/components/common/ArticlesTable'
import Layout from '@/components/layout/Layout'
import { NewsResponse } from '@/models'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

export const getStaticPaths: GetStaticPaths = async () => {

    const categorySlugs = [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology'
    ]

    const paths = categorySlugs.map(el => ({ params: { category: el } }))
    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps: GetStaticProps<NewsResponse> = async ({ params }) => {
    const category = params?.category?.toString()
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.NEWS_API_KEY}`)
        const articles = response.data.articles
        return {
            props: {
                articles
            }
        }
    } catch (error) {
        console.error('Error:', error)
        return {
            props: {
                articles: []
            }
        }
    }


}


const Category = (articles: NewsResponse) => {
    
    const route = useRouter()

    return (
        <Layout
            title={route.query.category ? route.query.category.toString().slice(0, 1).toUpperCase() + route.query.category.toString().slice(1) : ''}
            activeCategory={route.query.category?.toString()}
            description={route.query.category ? route.query.category.toString().slice(0, 1).toUpperCase() + route.query.category.toString().slice(1) : ''}
        >
            <div className='container mx-auto px-2'>
                <ArticlesTable articles={articles} title={route.query.category ? route.query.category.toString().slice(0, 1).toUpperCase() + route.query.category.toString().slice(1) : ''}/>
            </div>
        </Layout>
    )
}

export default Category