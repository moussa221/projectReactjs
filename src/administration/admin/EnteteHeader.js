import React from "react";
import { Link } from "react-router-dom";

export const EnteteHeader = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4 navbar-fixed-left">
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="https://cdn.pixabay.com/photo/2014/04/03/10/25/reading-310397_960_720.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Administration
              </a>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item has-treeview menu-open">
                <a href="/header" className="nav-link active">
                  <i className="nav-icon fas fa-user-lock" />
                  <p>Dashboard Admin</p>
                </a>
              </li>
              <li className="nav-item has-treeview menu-open">
                <a href="/welcome" target="_blank" className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  Dash Apprenant
                </a>
              </li>

              <li className="nav-item has-treeview">
                <Link to="/appIndex">Professeurs</Link>
              </li>
              <li className="nav-item has-treeview">
                <Link to="/demon">Apprenants</Link>
              </li>
              <li className="nav-item has-treeview">
                <Link to="/appRouter">Ajout des cours</Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://volkeno.sn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default EnteteHeader;
