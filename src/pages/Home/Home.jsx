// src/pages/Home/Home.jsx
import Retangulo from "../../components/Retangulo/Retangulo";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Retangulo tipo="1">
        <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
      </Retangulo>

      <Retangulo tipo="2">
        <Retangulo tipo="4">
          <Link to="/login" className={`${styles.link} ${styles.linkBlack}`}>
            <p>Login</p>
          </Link>
        </Retangulo>
      </Retangulo>

      <Retangulo tipo="3">
        <a href="https://www.unisinos.br/" className={styles.link}>
          <p>
            Entre no universo da Unisinos! <br />
            Explore o mundo!
          </p>
        </a>
      </Retangulo>

      <Retangulo tipo="5">
        <a
          href="https://www.unisinos.br/minha-unisinos/"
          className={styles.link}
        >
          Faça seu Cadastro
        </a>
      </Retangulo>
      <div className={styles.photocontainer}></div>
    </div>
  );
};

export default Home;
