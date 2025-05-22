// src/context/PostContext.js
import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      autor: "João",
      conteudo: "Primeira postagem no app!",
      avatar: "/assets/joao-estudante.jpg",
    },
    {
      autor: "Maria",
      conteudo: "Curtindo muito esse projeto 😄",
      avatar: "/assets/maria-estudante.jpg",
    }
  ]);

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
