import React from "react";
import { Link } from "react-router-dom";

const HeaderCours = () => {
  return (
    <nav className="container main-header navbar navbar-expand navbar-dark navbar-dark">
      <div className="navbar-nav links">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#">
            <i className="fas fa-bars" />
          </a>
        </li>
      </div>
      <button className="btn btn-dark">
        <Link to="/headerCours" className="link" activeClassName="active" exact>
          Liste des cours
        </Link>
      </button>
      <button className="btn btn-dark">
        <Link to="/add" className="link" activeClassName="active">
          Ajouter un cours
        </Link>
      </button>
    </nav>
  );
};

export default HeaderCours;
