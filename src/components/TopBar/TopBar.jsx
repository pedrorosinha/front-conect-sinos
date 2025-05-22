// src/components/TopBar/TopBar.jsx

import React from "react";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      {/* Itens de texto */}
      <span className={styles.item}>Perfil</span>
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <span className={styles.item}>Comunidades</span>
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <span className={styles.item}>Sinos Flix</span>
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <span className={styles.item}>Repositórios</span>
      <div className={styles.separator}></div> {/* Traço entre itens */}
      {/* Ícones */}
      <img
        src="/assets/icons/cart.png"
        alt="Carrinho"
        className={styles.icon}
      />
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <img
        src="/assets/icons/search.png"
        alt="Buscar"
        className={styles.icon}
      />
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <img
        src="/assets/icons/bell.png"
        alt="Notificações"
        className={styles.icon}
      />
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <img
        src="/assets/icons/settings.png"
        alt="Configurações"
        className={styles.icon}
      />
    </div>
  );
};

export default TopBar;
