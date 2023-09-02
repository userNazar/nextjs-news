import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'


const ErrorNotFound = () => {
    return (
        <Layout title='404'>
            <h1 className='text-4xl text-center mt-20 font-bold'>NOT FOUND PAGE</h1>
            <p className='text-xl text-center mt-10 font-semibold'>You can connect us there - <a className='text-red-500' href="mailto:test@gmail.com">test@gmail.com</a></p>
            <p className='text-xl text-center mt-10 font-semibold'>Or go to home page - <Link className='text-red-500' href={'/'}>Home</Link></p>
            <div className='flex justify-center items-center mt-10'>
                <Image src={'https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png'} alt='' width={600} height={400}></Image>
            </div>
        </Layout>
    )
}

export default ErrorNotFound