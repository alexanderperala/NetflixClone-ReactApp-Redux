import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>NETFLIX</h1>
      <Link to="/signin" className={styles.headerBtn}>Logga in</Link>
    </header>
  );
};

export default Header;
