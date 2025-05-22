// src/pages/Feed/Feed.js
import Retangulo from "../../components/Retangulo/Retangulo";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import Post from "../../components/Post/Post";
import styles from "./Feed.module.css";
import Comunidades from "../../components/Comunidades/Comunidades";
import { usePostContext } from "../../context/PostContext";
import { useState } from "react";

const Feed = () => {
  const navigate = useNavigate();
  const { posts } = usePostContext();
  const [showOptions, setShowOptions] = useState(false);

  const handleImageSelect = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const imagesArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setShowOptions(false);
      navigate("/create-post", { state: { images: imagesArray } });
    }
  };

  return (
    <div>
      {/* Header com logo */}
      <Retangulo tipo="1">
        <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
      </Retangulo>

      {/* TopBar */}
      <Retangulo tipo="12">
        <TopBar />
      </Retangulo>

      <div className={styles.feedContent}>
        {/* Posts à esquerda */}
        <div className={styles.postsSection}>
          {posts.map((post, index) => (
            <Post
              key={index}
              autor={post.autor}
              conteudo={post.conteudo}
              imagens={post.imagens}
              avatar={post.avatar}
            />
          ))}

          {/* Botão principal + menu suspenso */}
          <div className={styles.postOptionsContainer}>
            <button
              className={styles.mainPostButton}
              onClick={() => setShowOptions(!showOptions)}
            >
              Criar nova postagem
            </button>

            {showOptions && (
              <div className={styles.optionsPopup}>
                <label htmlFor="uploadInput" className={styles.optionButton}>
                  Adicionar imagem
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  id="uploadInput"
                  style={{ display: "none" }}
                  onChange={handleImageSelect}
                />
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

        {/* Comunidades à direita */}
        <div className={styles.comunidadesWrapper}>
          <Comunidades />
        </div>
      </div>
    </div>
  );
};

export default Feed;
