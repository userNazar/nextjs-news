import { NewsArticle } from '@/models'
import { setCurrentAriclePage } from '@/store/features/currentArticleSlicer';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/router';



interface ArticleProps {
    article: NewsArticle
}

const Article = ({ article }: ArticleProps) => {

    const { urlToImage, title, description, url } = article
    const validImageUrl = (urlToImage?.startsWith('http://') || urlToImage?.startsWith('https://')) ? urlToImage : undefined;

    if (!title || !description) return null;
    
    const router = useRouter()
    const dispatch = useAppDispatch()

    const cardClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const clickedElement = event.target as HTMLElement;


        if (!clickedElement.classList.contains('no-route')) {
            router.push(`/categories/article/${title}`);
            dispatch(setCurrentAriclePage(article));
        }
    };

    return (

        <div className='w-[305px] sm:w-[405px] cursor-pointer m-5 hover:opacity-80 relative overflow-hidden' onClick={e => cardClickHandler(e)}>
            <div className=' w-[305px] h-[210px] sm:w-[405px] sm:h-[230px]  overflow-hidden'>
                <img className='w-[305px] h-[200px] sm:w-[405px] sm:h-[220px] ' src={validImageUrl || 'https://fomantic-ui.com/images/wireframe/image.png'} alt='ArticlePhoto' />
            </div>
            <h2 className='font-bold text-xl'>{title.toString().length >= 38 ? title.slice(0, 37) + '...' : title}</h2>
            <p className='text-gray-700 mt-2'>{description.length >= 79 ? description.slice(0, 80) + '...' : description}</p>
            <div className='flex items-center mt-2'>
                <div className='bg-red-600 w-[3px] h-[18px] mr-2' />
                <a className='text-gray-500 hover:underline no-route' href={url} target="_blank" rel="noopener noreferrer">
                    More (page Source)
                </a>
            </div>
        </div>

    )
}

export default Article