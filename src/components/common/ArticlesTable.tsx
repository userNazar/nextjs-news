import { NewsResponse } from '@/models'
import React from 'react'
import Article from './Article'


interface ArticlesTableProps {
    articles: NewsResponse 
    title: string;
}


const ArticlesTable = ({ articles: { articles }, title }: ArticlesTableProps) => {
    
    return (
        <>
            <div className='flex items-center mt-5'><div className='bg-red-600 w-[3px] h-[18px] mr-2'></div><h1 className='text-2xl font-semibold text-gray-700'>{title}</h1></div>
            <div className='flex flex-wrap justify-around'>
                {
                    ((articles.length < 1) || !articles)
                        ?
                        <p className='font-semibold text-2xl'>No articles</p>
                        :
                        articles.map(article => <Article key={article.title + article.author + article.url} article={article} />)
                }
            </div>
        </>

    )
}

export default ArticlesTable