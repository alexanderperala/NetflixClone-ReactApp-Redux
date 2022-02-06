import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/browse");
  };

  return (
    <>
      <header className="header">
        <Link to={"/"}>
          <h1 className="logo">NETFLIX</h1>
        </Link>
      </header>
      <div className="center">
        <div className="login-form-container">
          <form action="#" method="POST">
            <h3 id="login-form-title">Logga in</h3>
            <input
              className="login-input"
              type="text"
              placeholder="Epost"
              name="email"
              required
            />
            <input
              className="login-input"
              type="password"
              placeholder="Lösenord"
              name="password"
              required
            />
            <button id="login-button" onClick={() => handleClick()}>
              Logga in
            </button>
          </form>

          <div className="reg">
            <p className="new">Ny på Netflix?</p>
            <Link to="/register" className="register">
              Registrera dig nu.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
