import styles from "./Retangulo.module.css";

const Retangulo = ({ tipo, children }) => {
  return (
    <div className={`${styles.retangulo} ${styles[`tipo${tipo}`]}`}>
      {children}
    </div>
  );
};

export default Retangulo;
