import Header from "../../../components/Header-NotSignedIn/Header";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/register");
  };

  return (
    <>
      <Header />
      <h1 id="login-heading" className="heading">
        Obegränsat med filmer, <br />
        serier och annat.
      </h1>
      <h3 id="login-text" className="heading">
        Titta var du vill. Avsluta när du vill.
      </h3>
      <h4 id="login-text2" className="heading">
        Redo att börja titta? Ange din e-postadress för att skapa eller
        återaktivera ett konto.
      </h4>
      <div className="get-going">
        <input type="text" placeholder="E-postadress" name="email" />
        <button onClick={() => handleClick()}>Kom igång</button>
      </div>
    </>
  );
};

export default Home;
