import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase";

const Connexion = (props) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState("");

  //affichage du bouton
  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .loginUser(email, password)
      .then((user) => {
        setEmail(""); //vider les cases
        setPassword("");
        props.history.push("/header");
      })
      .catch((error) => {
        setError(error);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="login-form signUpLoginBox">
      <div className="slContainer">
        <h2 className="font-weight-bold text-center">Connexion</h2>
        {error !== "" && <span>{error.message}</span>}
        <form onSubmit={handleSubmit}>
          <div className="form-group inputBox">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              required
            />
            <label htmlFor="email">Adresse Email</label>
          </div>

          <div className="form-group inputBox">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control"
              required
            />
            <label htmlFor="password">Mot de passe</label>
          </div>

          {btn ? (
            <button className="btn btn-primary">Connexion</button>
          ) : (
            <button disabled className="btn btn-primary form-control">
              Connexion
            </button>
          )}
        </form>
        <div className="linkContainer">
          <Link className="simpleLink" to="/inscription">
            Nouveau membre? Inscrivez-vous maintenant.
          </Link>
        </div>
        <hr />
        <div className="btnLink">
          <Link className="simpleLink" to="/">
            Revenir à la page d'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
