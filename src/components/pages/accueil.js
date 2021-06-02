import React from "react";
import { Link } from "react-router-dom";

import { FcInfo } from "react-icons/fc";

const Accueil = () => {
  return (
    <main className="main text-center p-3 m-5">
      <FcInfo size="45px" color="green" />
      <h1>
        <span className="font-weight-bold text-center">Bienvenu(e)</span>
      </h1>
      <br />
      <div>
        <p>
          <Link className="form-control btn btn-success btn-main" to="/login">
            Apprenant
          </Link>
        </p>
      </div>
      <div>
        <p>
          <Link
            className="form-control btn btn-primary btn-main"
            to="/connexion"
          >
            Adminsitration
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Accueil;
