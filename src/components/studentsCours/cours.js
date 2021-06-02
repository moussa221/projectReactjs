import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../administration/admin/Footer";
import CoursList from "../pages/coursList";

const Cours = () => {
  return (
    <>
      <nav className="navbar shadow navbar-expand-sm navbar-dark bg-dark">
        <div>
          <Link to="/welcome" className="navbar-brand text-uppercase">
            Dashboard Apprenant
          </Link>
        </div>
        <div>
          <Link to="/cours" className="btn btn-dark ml-auto">
            Mes Cours
          </Link>
        </div>
        <div>
          <Link to="/calendriers" className="btn btn-dark ml-auto">
            Calendrier
          </Link>
        </div>
        <div>
          <button
            className="navbar-brand btn btn-dark bt_Position"
            type="submit"
          >
            Deconnexion
          </button>
        </div>
      </nav>
      <div className="portfolio">
        <CoursList />
      </div>
      <Footer />
    </>
  );
};

export default Cours;
