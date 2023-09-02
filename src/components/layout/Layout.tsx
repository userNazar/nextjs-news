import React, { ReactNode } from 'react'
import Header from './header/Header'
import Head from 'next/head'
import Footer from './footer/Footer';

interface LayoutProps {
    children: ReactNode;
    activeCategory?: string;
    title: string;
    description?: string;
}

const Layout = ({ children, activeCategory, title, description }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title} | Page</title>
                <meta name="description" content={description || 'Default description for your website.'} />
            </Head>
            <div className='flex flex-col h-[100vh]'>
                <Header activeCategory={activeCategory} />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout