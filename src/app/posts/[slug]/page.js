import logger from "@/logger";
import { remark } from 'remark';
import html from 'remark-html';

import { CardPost } from "@/components/CardPost";


async function getPostBySlug(slug) {
    const url = `http://localhost:3042/posts/${slug}`
    const response = await fetch(url)
    if (!response.ok) {
        logger.error('Ops, alguma coisa correu mal')
        return {}
    }
    logger.info('Posts obtidos com sucesso')
    const post = await response.json()
    if (data.length == 0) {
        return {}
    }
    
    const processedContent = await remark()
        .use(html)
        .process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml

    return post
}

const PagePost = async ({ params }) => {
    const post = await getPostBySlug(params.slug)
    return (<div>
        <CardPost post={post} highlight />
        <h3>Código:</h3>
        <div>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
    </div>)
}

export default PagePost