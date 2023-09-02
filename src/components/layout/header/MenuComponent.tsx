import Link from 'next/link'
import React from 'react'


interface MenuComponentProps {
    cat: string;
    currentColor: string;
    overCategoryHandler: () => void;
    activeCategory?: string;
}

const MenuComponent = ({ cat, currentColor, overCategoryHandler, activeCategory }: MenuComponentProps) => {
    return (
        <li className={`mx-4 lg:mx-8 relative group ${activeCategory === cat ? 'text-gray-400' : 'text-white'} `} onMouseEnter={overCategoryHandler}>
            <Link href={'/categories/' + cat}>{cat.slice(0, 1).toLocaleUpperCase() + cat.slice(1)}</Link>
            <span className={`absolute inset-x-0 top-[140%] h-0.5 ${currentColor} transform origin-bottom scale-0 group-hover:scale-100 transition-transform`}></span>
        </li>
    )
}

export default MenuComponent