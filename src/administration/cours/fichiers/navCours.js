import React, { Link } from "react";
import HeaderCours from "./headerCours";

export const NavCours = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#">
              <i className="fas fa-bars" />
            </a>
          </li>
          <div>
            <Link to="/appRouter" className="btn btn-light ml-auto">
              Ajout
            </Link>
          </div>
          <div>
            <Link to="/appRouter" className="btn btn-light ml-auto">
              Add
            </Link>
          </div>
          {/* <HeaderCours /> */}
        </ul>
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
      </nav>
    </div>
  );
};

export default NavCours;
