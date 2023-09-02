import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useState, useEffect } from 'react'
import { BiNews, BiSearch } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import BurgerMenu from './BurgerMenu'
import MenuComponent from './MenuComponent'

interface HeaderProps {
    activeCategory?: string
}

const Header = ({ activeCategory }: HeaderProps) => {

    const router = useRouter()

    const [screenWidth, setScreenWidth] = useState<number | null>(null)
    const [activeBurger, setActiveBurger] = useState(false)

    const categorySlugs = [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology'
    ]
    const [currentColor, setCurrentColor] = useState('bg-blue-500')
    const colors = [
        'bg-blue-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-red-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-indigo-500',
        'bg-teal-500',
        'bg-orange-500',
        'bg-cyan-500',
    ]

    const overCategoryHandler = () => {
        setCurrentColor(randomColor(colors))
    }

    const randomColor = useCallback(
        (colors: string[]) => {
            const randomIndex = Math.floor(Math.random() * colors.length)
            return colors[randomIndex]
        }, []
    )

    useEffect(() => {
        setScreenWidth(window.innerWidth)
        const widthHandler = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', widthHandler)
        return () => {
            window.removeEventListener('resize', widthHandler)
        }
    }, [])




    return (
        <header className='bg-black text-white px-2'>
            <div className='container mx-auto flex justify-between items-center py-2'>
                <Link href={'/'}>
                    <BiNews size={50} color={'white'} />
                </Link>
                <nav>
                    {
                        screenWidth && screenWidth > 790 ?
                            <ul className='flex justify-center'>
                                {categorySlugs.map(cat => <MenuComponent key={cat} cat={cat} currentColor={currentColor} activeCategory={activeCategory} overCategoryHandler={overCategoryHandler} />)}
                            </ul>
                            :
                            <div>
                                <button className='relative group' onClick={() => setActiveBurger(prev => !prev)}>
                                    <RxHamburgerMenu size={30} />
                                    <span className={`absolute inset-x-0 top-[140%] h-0.5 bg-white transform origin-bottom scale-0 group-hover:scale-100 transition-transform`}></span>
                                </button>
                            </div>
                    }
                </nav>
                <div>
                    <button className={`flex items-center 
                    ${screenWidth && screenWidth <= 1300 ? 'relative group' : 'bg-zinc-800 w-[200px] p-2 hover:bg-zinc-700'} 
                    `}
                        onClick={() => router.push('/search')}>
                        <BiSearch className={`${screenWidth && screenWidth <= 1300 ? '' : 'ml-2 mr-5'} `} size={screenWidth && screenWidth <= 1300 ? 40 : 20} />
                        <span className={`${screenWidth && screenWidth <= 1300 ? 'hidden' : ''}`}>Seach more</span>
                        <span className={`absolute inset-x-0 top-[100%] h-0.5 bg-white transform origin-bottom scale-0 group-hover:scale-100 transition-transform`}></span>
                    </button>
                </div>
            </div>
            {
                screenWidth && screenWidth < 790 && activeBurger && <BurgerMenu list={categorySlugs} currentColor={currentColor} activeCategory={activeCategory} overCategoryHandler={overCategoryHandler} />
            }
        </header>
    )
}

export default Header