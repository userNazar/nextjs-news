import Layout from '@/components/layout/Layout'
import { useAppSelector } from '@/store/hooks'
import { BiTimeFive, BiLinkExternal } from 'react-icons/bi';


const ArticlePage = () => {

    const { current } = useAppSelector(state => state.currentArticlePage)
    if (!current) {
        return (
            <div>Some troubles...</div>
        )
    }

    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);

        const year = date.getFullYear().toString().slice(2);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };

    return (
        <Layout title={current.author ? current.title.toString() : 'Some article'}>
            <div className='bg-red-700 py-5'>
                <p className='container px-2 mx-auto text-white text-4xl font-semibold mb-4'>NEWS</p>
                <hr />
            </div>
            <div className='container px-2 mx-auto mt-7'>
                <h1 className='text-3xl font-semibold'>{current.title}</h1>
                <div className='flex items-center mt-3'><BiTimeFive className={'mr-2'} size={20} /> {formatDate(current.publishedAt)}</div>
                <div className='mt-3'><a href={current.url} target="_blank"><BiLinkExternal size={25}/></a></div>
                <div className='max-h-[550px] max-w-[1000px] mt-5'><img src={current.urlToImage} alt="" /></div>
                <div className='max-w-[1000px] mt-10 mb-10'>{current.content} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ipsum dignissimos cumque pariatur libero quisquam minima quo veritatis exercitationem quae obcaecati ullam sunt, inventore adipisci porro, numquam, quam quibusdam ducimus? Neque recusandae quas iusto deserunt excepturi ratione, explicabo aspernatur ipsum quibusdam? Dolorum architecto at dignissimos ratione iste maxime provident officiis expedita qui. Ipsa, earum totam. Sapiente voluptate nisi quia natus quam eos expedita inventore eius ipsa repellendus tempore a, et, laudantium aut non! Nisi minus quae, inventore sapiente praesentium voluptates eos ducimus voluptate fugit dolores ipsum nemo quia optio provident aperiam tempora illum dicta molestiae consectetur deserunt aliquid facilis neque iusto facere? Reiciendis, aliquid nobis ipsa deserunt vero sit laboriosam rem autem nulla. Ducimus obcaecati officia quam commodi dolor nisi deserunt illum libero consequatur ea fugit quo officiis soluta repellat repellendus nulla eligendi explicabo eveniet tempore, distinctio magni adipisci. Hic iure, molestias dignissimos fugit incidunt asperiores ex porro beatae ducimus obcaecati quo, adipisci qui quia excepturi, consequuntur officia quibusdam saepe eos sint impedit est ratione quae architecto dolore. Et, perspiciatis mollitia qui vero doloremque minima optio deleniti earum, dolorum molestias atque eaque reprehenderit quod cum nisi magnam accusamus at illo. Labore cum ea laborum voluptates eaque porro quo facere, perspiciatis dolor explicabo, ab ratione libero eos dolorum culpa minima nemo molestiae ex harum magni fugit cumque maiores eveniet. Sit recusandae accusamus veniam magni ipsum voluptate, exercitationem dolores, odit aspernatur, officia deleniti autem? Voluptatibus saepe doloremque possimus dolorem, ab, ullam, odio amet tenetur veritatis nihil porro harum voluptates quae! Perspiciatis sint laborum, quas quae sunt rem placeat esse vitae quia ea fugiat temporibus ipsam delectus mollitia odio nisi, debitis culpa at est! Quo autem, asperiores quaerat, eos rerum quibusdam error consectetur, earum saepe dolorum omnis doloremque. Iusto inventore, suscipit ratione eos, hic ipsam assumenda ab odit recusandae repellat earum. Facilis eius praesentium exercitationem libero dolor natus, id dicta nulla doloremque sequi, quaerat possimus. Praesentium fuga sed debitis, beatae adipisci expedita veritatis, molestias excepturi delectus magni nam. Eos reprehenderit quis est, dolorum blanditiis nobis odio, aliquam fuga exercitationem placeat voluptates dolores sit repellat voluptatibus cumque iusto amet velit! Ipsa laudantium dignissimos non quae? Necessitatibus totam iure maxime, dolores quia laudantium fugit optio voluptates amet aspernatur rem quo magni rerum ratione illo quidem omnis ex. Nam similique facere veritatis a? Incidunt hic deserunt natus facilis cumque vero illo deleniti tempora atque. Ratione iure sed tenetur in ipsa facilis saepe non, atque nulla laboriosam rerum beatae praesentium labore reprehenderit. Voluptatem minus dolore accusamus, eaque tempore eum quasi doloribus tenetur commodi quam? Temporibus, rerum! Hic eligendi commodi sunt inventore voluptatibus minus! Natus eaque commodi dignissimos reiciendis, reprehenderit unde corrupti incidunt ipsum quisquam velit est doloribus exercitationem voluptas? Hic labore esse vel adipisci dolores asperiores doloremque. Exercitationem numquam laudantium dolorem facere aliquid dicta corrupti non commodi, magnam unde dignissimos incidunt, labore nisi quos ex sint molestiae nihil architecto totam ipsam nostrum ad repudiandae itaque quia? Consectetur fuga quae labore? Assumenda nihil dolorem in eveniet. Aut deleniti nemo, sit obcaecati minus illo eos repudiandae molestiae dignissimos culpa. Excepturi, et dolorum iusto quasi sunt in nobis aspernatur adipisci voluptatem culpa odio eum! Sit omnis quaerat, voluptatem neque mollitia optio reprehenderit nisi quo eaque consequatur ullam nesciunt molestias? Aut quisquam soluta nesciunt commodi dignissimos dolorum eaque molestiae! Cupiditate hic explicabo esse distinctio quod reprehenderit sequi laboriosam facere sed neque! Rem quaerat dolor corrupti qui, assumenda, repellat laborum asperiores pariatur sint similique quos voluptatem corporis. Officiis repudiandae distinctio reprehenderit, odio, omnis optio quia enim nam libero hic ipsam dolore molestiae et architecto, voluptatem error labore quis animi modi. Eaque ipsa in, nam officiis voluptates commodi nostrum exercitationem perferendis consectetur deleniti.</div>
            </div>
        </Layout>
    )
}

export default ArticlePage