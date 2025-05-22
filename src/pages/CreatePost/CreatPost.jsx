import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./CreatePost.module.css";
import { usePostContext } from "../../context/PostContext";

const CreatePost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addPost } = usePostContext();

  const [descricao, setDescricao] = useState("");
  const [avatar, setAvatar] = useState(null); // <- Novo estado para avatar

  const isTextOnly = location.state?.isTextOnly || false;
  const images = location.state?.images || [];

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!isTextOnly && images.length === 0 && !descricao.trim()) {
      alert("Por favor, insira uma descrição ou selecione uma imagem.");
      return;
    }

    const newPost = {
      autor: "Você",
      conteudo: descricao || "",
      imagens: isTextOnly ? [] : images,
      avatar: avatar || "/assets/estudantes.jpg", // Se não escolher, usa avatar padrão
    };

    addPost(newPost);
    navigate("/feed");
  };

  return (
    <div className={styles.container}>
      {/* Avatar Preview e Upload */}
      <div className={styles.avatarSection}>
        <label htmlFor="avatarInput" className={styles.avatarUploadLabel}>
          Escolher avatar
        </label>
        <input
          type="file"
          id="avatarInput"
          accept="image/*"
          onChange={handleAvatarChange}
          className={styles.avatarInputHidden}
        />
        {avatar && (
          <div className={styles.avatarPreview}>
            <img src={avatar} alt="Avatar Preview" />
          </div>
        )}
      </div>


      {/* Visualizador de imagem */}
      {!isTextOnly && images.length > 0 && (
        <div className={styles.imageViewer}>
          <img src={images[0]} alt="Preview" />
        </div>
      )}

      {/* Campo de texto */}
      <textarea
        className={styles.descricao}
        placeholder="Escreva uma descrição..."
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <button className={styles.postarBtn} onClick={handleSubmit}>
        Postar
      </button>
    </div>
  );
};

export default CreatePost;
