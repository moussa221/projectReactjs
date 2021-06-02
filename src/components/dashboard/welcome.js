import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../administration/admin/Footer";

import Picker from "../../calendrier/Picker";

const Welcome = () => {
  return (
    <>
      <nav className="navbar shadow navbar-expand-sm navbar-dark bg-dark">
        <div>
          <i className="nav-icon fas fa-users" />
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

      <div className="container row">
        <div className="col-md-8 p-3">
          <div className="card">
            <h1 className="text-center text-uppercase">A propos de la section apprenant</h1>
            <p className="text-justify p-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              rem provident ipsum eligendi reprehenderit cupiditate eveniet
              exercitationem accusamus? Quos debitis quasi quae, blanditiis
              quaerat consequuntur expedita aliquam atque hic exercitationem
              illo ab eos voluptas amet laudantium rerum architecto provident
              quibusdam nisi in dignissimos assumenda iure. Eum explicabo
              placeat culpa. Quisquam omnis alias necessitatibus natus non
              provident dolor obcaecati quaerat excepturi suscipit sed beatae,
              corrupti laborum velit veniam optio vero? Sint magni magnam
              molestias assumenda harum porro. Possimus officiis dolor eum rerum
              quam culpa excepturi nihil inventore, sed iusto, quibusdam ex
              deserunt, similique beatae aspernatur temporibus numquam quos
              laudantium tenetur dicta? Laudantium natus corrupti, blanditiis
              doloremque rerum, sapiente facilis officia optio asperiores eius
              placeat sequi nam dolor similique sit odit necessitatibus deleniti
              quia veniam amet ducimus exercitationem, nesciunt aperiam
              architecto. Dolores magni ab soluta! Eligendi cupiditate
              repellendus non blanditiis dolor, expedita asperiores tempora quos
              odit. Officia suscipit, consequuntur facilis iste unde officiis
              non expedita natus sed optio necessitatibus numquam magni nobis
              exercitationem voluptatum rem accusamus omnis sunt, a laudantium
              tempore debitis quas, ipsam itaque. Deserunt cupiditate similique
              aspernatur ex aliquid, facilis corrupti vero, illum consequuntur
              deleniti expedita ullam enim rem, delectus nobis laboriosam
              adipisci. Ea explicabo sint qui, incidunt illum perspiciatis!
            </p>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className="card">
            <div className="divRight">
              <h2 className="text-center p-2">Bienvenu(e)</h2>
              <p className="text-justify p-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                optio, id dignissimos sint quis qui quo molestias ab
                reprehenderit, consequatur est, veritatis itaque! Ipsam rerum
                cum culpa, distinctio ipsum dicta!
              </p>
              <hr />
              <div className="p-3">
                <Picker />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Welcome;
