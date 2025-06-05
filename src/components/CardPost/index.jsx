import { Avatar } from "../Avatar"
import Image from "next/image"

export const CardPost = ({ post }) => {
    return (
        <article>
            <header>
                <figure>
                    <Image 
                    src={post.cover} width={438} height={133} 
                    alt={`capa do post de titulo: ${post.title}`}/>
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer>
                <Avatar
                    imageSrc={post.author.Avatar}
                    name={post.author.username}
                />
            </footer>
        </article>
    )
}