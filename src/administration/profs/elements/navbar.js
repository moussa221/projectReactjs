import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-dark navbar-dark">
      <div className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#">
            <i className="fas fa-bars" />
          </a>
        </li>
        <Link to="/appIndex" className="navbar-brand">
          Accueil
        </Link>
      </div>
      <div>
        <Link to="/contacts/add" className="btn btn-light ml-auto">
          Ajouter un professeur
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
