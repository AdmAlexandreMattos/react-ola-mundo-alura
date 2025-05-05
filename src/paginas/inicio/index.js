import styles from "./Inicio.module.css";

import posts from "json/posts.json";
import CardPost from "componentes/CardPost";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <CardPost post={post} />
        </li>
      ))}
    </ul>
  );
}
