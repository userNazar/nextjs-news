import Link from 'next/link';
import React from 'react'

const Footer = () => {
  const categorySlugs = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ]

  const blocks = [];

  for (let i = 0; i < categorySlugs.length; i += 2) {
    const category1 = categorySlugs[i];
    const category2 = categorySlugs[i + 1];

    const block = (
      <div key={i} className="border-l-4 border-white pl-4 m-2">
        <div>
          <Link className='hover:underline' href={'/categories/' + category1}>{category1.slice(0, 1).toLocaleUpperCase() + category1.slice(1)}</Link>
        </div>

        {category2 && <div>
          <Link className='hover:underline' href={'/categories/' + category2}>{category2.slice(0, 1).toLocaleUpperCase() + category2.slice(1)}</Link>
        </div>}
      </div>
    );

    blocks.push(block);
  }


  return (
    <footer className='bg-stone-600 text-white mt-auto'>
      <div className='container px-2 mx-auto py-5'>
        <h2 className='text-2xl font-bold'>Explore the BBC</h2>
        <div className='flex justify-between mt-4 flex-wrap'>
          {blocks}
        </div>
      </div>
    </footer>
  )
}

export default Footer