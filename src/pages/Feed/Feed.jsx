// src/pages/Feed/Feed.js
import Retangulo from "../../components/Retangulo/Retangulo";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import Post from "../../components/Post/post";
import styles from "./Feed.module.css";
import { usePostContext } from "../../context/PostContext";
import { useState } from "react"; // Import necessário para estado local

const Feed = () => {
  const navigate = useNavigate();
  const { posts } = usePostContext(); // Posts do contexto global
  const [showOptions, setShowOptions] = useState(false); // Estado para mostrar popup

  const handleImageSelect = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const imagesArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setShowOptions(false); // Fecha o menu
      navigate("/create-post", { state: { images: imagesArray } });
    }
  };

  return (
    <div>
      {/* Cabeçalho com logo */}
      <Retangulo tipo="1">
        <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
      </Retangulo>

      {/* Barra superior */}
      <Retangulo tipo="12">
        <TopBar />
      </Retangulo>

      {/* Lista de posts */}
      <div className={styles.postsSection}>
        {posts.map((post, index) => (
          <Post
            key={index}
            autor={post.autor}
            conteudo={post.conteudo}
            imagens={post.imagens}
          />
        ))}
      </div>

      {/* Botão principal + menu suspenso */}
      <div className={styles.postOptionsContainer}>
        <button
          className={styles.mainPostButton}
          onClick={() => setShowOptions(!showOptions)}
        >
          Criar nova postagem
        </button>

        {/* Menu suspenso */}
        {showOptions && (
          <div className={styles.optionsPopup}>
            {/* Opção: Adicionar imagem */}
            <label htmlFor="uploadInput" className={styles.optionButton}>
              Adicionar imagem
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              id="uploadInput"
              style={{ display: "none" }}
              onChange={(e) => {
                handleImageSelect(e);
              }}
            />

            {/* Opção: Postar apenas texto */}
            <button
              className={styles.optionButton}
              onClick={() => {
                setShowOptions(false);
                navigate("/create-post", { state: { isTextOnly: true } });
              }}
            >
              Postar apenas texto
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
