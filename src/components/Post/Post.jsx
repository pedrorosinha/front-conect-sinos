// src/components/Post/Post.js
import styles from "./Post.module.css";

const Post = ({ autor, conteudo, imagens, avatar }) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.avatar}>
        <img
          src={avatar}
          alt={`Avatar de ${autor}`}
          className={styles.avatarImage}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.autor}>{autor}</p>

        {imagens && imagens.length > 0 && (
          <img src={imagens[0]} alt="Post" className={styles.postImage} />
        )}

        <p className={styles.conteudo}>{conteudo}</p>
      </div>
    </div>
  );
};

export default Post;
