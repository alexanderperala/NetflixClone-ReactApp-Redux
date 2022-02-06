import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ onSearch, searchResult }) => {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();

  const [term, setTerm] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (term.length > 1) {
      const timeoutId = setTimeout(() => {
        onSearch(term);

        let query = term.toLocaleLowerCase();

        history.push(`/search/${query}`);
      }, 600);
      return () => clearTimeout(timeoutId);
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return (
    <header className={styles.header}>
      <div className={styles.headerLinks}>
        <h1 id="logo">NETFLIX</h1>
        <Link to={"/browse"}>
          <strong>Hem</strong>
        </Link>
        <Link to={"/"}> Serier</Link>
        <Link to={"/"}>Filmer</Link>
        <Link to={"/"}>Nytt och populärt</Link>
        <Link to={"/"}>Min lista</Link>
      </div>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
          alt="avatar"
        />
      </div>
      <div className={styles.searchBarContainer}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            placeholder="Sök.."
            className={styles.searchbar}
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
        <Link to="/" className={styles.headerLoginBtn} type="button">
          Logga ut
        </Link>
      </div>
    </header>
  );
};

export default Header;
