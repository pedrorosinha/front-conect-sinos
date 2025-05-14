import Retangulo from "../../components/Retangulo/Retangulo";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import styles from "./Feed.module.css";

const Feed = () => {
  return (
    <div>
      <Retangulo tipo="1">
        <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
      </Retangulo>
      <Retangulo tipo="12">
        <TopBar />
      </Retangulo>
    </div>
  );
};

export default Feed;
