import { CardPost } from "@/components/CardPost"
import styles from './page.module.css'
import logger from "@/logger";
import Link from 'next/link';

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  console.log(response);
  if (!response.ok) {
    logger.error("Ops! Algo deu errado.");
  }
    logger.info('Posts obtidos com sucesso!')
  return response.json();
}


export default async function Home() {
  const {data: posts, prev, next} = await getAllPosts(1);
  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
      {prev && <Link href={`/?${prev}`} className={styles.prev}>Anterior</Link>}
      {next && <Link href={`/?${next}`} className={styles.next}>Próxima página</Link>}
    </main>
  );
}
