import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul>
        <li>
          <Link to="/allCours">Mes cours</Link>
        </li>
        <li>
          <Link to="/calendrier">Calendrier</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
