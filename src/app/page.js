import { CardPost } from "@/components/CardPost"
import styles from './page.module.css'

async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts");
  console.log(response);
  if (!response.ok) {
    throw new Error("Ops! Algo deu errado.");
  }
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost post={post} />)}
    </main>
  );
}