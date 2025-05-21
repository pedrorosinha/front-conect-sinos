// src/components/Post/Post.js
import styles from "./Post.module.css";

const Post = ({ autor, conteudo, imagens }) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.avatar}></div>
      <div className={styles.content}>
        <p className={styles.autor}>{autor}</p>

        {/* Imagem vem antes da descrição */}
        {imagens && imagens.length > 0 && (
          <img src={imagens[0]} alt="Post" className={styles.postImage} />
        )}

        {/* Descrição agora vem depois da imagem */}
        <p className={styles.conteudo}>{conteudo}</p>
      </div>
    </div>
  );
};

export default Post;
