import React from 'react'
import MenuComponent from './MenuComponent';

interface BurgerMenuProps {
  list: string[],
  currentColor: string;
  overCategoryHandler: () => void;
  activeCategory?: string
}

const BurgerMenu = ({ list, currentColor, overCategoryHandler, activeCategory }: BurgerMenuProps) => {
  return (
    <ul className='flex justify-around flex-wrap pb-3'>
      {
        list.map(cat =>
          <div className='my-2' key={cat}>
            <MenuComponent cat={cat} currentColor={currentColor} activeCategory={activeCategory} overCategoryHandler={overCategoryHandler} />
          </div>
        )
      }
    </ul>
  )
}

export default BurgerMenu