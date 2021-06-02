import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase/index";

const Inscription = (props) => {
  const firebase = useContext(FirebaseContext);

  const data = {
    prenom: "",
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { prenom, nom, email, password } = loginData;
    firebase
      .signupUser(email, password)
      .then((authUser) => {
        return firebase.user(authUser.user.userId).set({
          prenom,
          nom,
          email,
        });
      })
      .then(() => {
        //pour vider les champs
        setLoginData({ ...data });
        //redirection
        props.history.push("/header");
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...data });
      });
  };

  //destructuring
  const { prenom, nom, email, password, confirmPassword } = loginData;

  const btn =
    prenom === "" ||
    nom === "" ||
    email === "" ||
    password === "" ||
    password !== confirmPassword ? (
      <button disabled className="btn btn-primary">
        Inscription
      </button>
    ) : (
      <button className="btn btn-primary">Inscription</button>
    );

  //gestion des erreurs
  const errorMsg = error !== "" && <span>{error.message}</span>;

  return (
    <div className="login-form signUpLoginBox">
      <div className="slContainer">
        <h2 className="font-weight-bold text-center">Inscription</h2>

        {errorMsg}

        <form onSubmit={handleSubmit}>
          <div className="form-group inputBox">
            <input
              onChange={handleChange}
              value={prenom}
              type="text"
              className="form-control"
              id="prenom"
              required
            />
            <label htmlFor="prenom">Prénom</label>
          </div>

          <div className="form-group inputBox">
            <input
              onChange={handleChange}
              value={nom}
              type="text"
              className="form-control"
              id="nom"
              required
            />
            <label htmlFor="nom">Nom</label>
          </div>

          <div className="form-group inputBox">
            <input
              onChange={handleChange}
              value={email}
              type="email"
              className="form-control"
              id="email"
              required
            />
            <label htmlFor="email">Adresse Email</label>
          </div>

          <div className="form-group inputBox">
            <input
              onChange={handleChange}
              value={password}
              type="password"
              className="form-control"
              id="password"
              required
            />
            <label htmlFor="password">Mot de passe</label>
          </div>

          <div className="form-group inputBox">
            <input
              onChange={handleChange}
              value={confirmPassword}
              type="password"
              className="form-control"
              id="confirmPassword"
              required
            />
            <label htmlFor="confirmPassword">
              Confirmer votre mot de passe
            </label>
          </div>

          {btn}
        </form>
        <hr />
        <div className="text-center linkContainer">
          <Link className="simpleLink" to="/connexion">
            Déjà inscrit? Connectez-vous.
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

export default Inscription;
