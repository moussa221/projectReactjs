import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./elements/navbar";
import Contacts from "./contacts/contacts";
import AddContact from "./contacts/addContact";
import EditContact from "./contacts/editContact";
import EnteteHeader from "../admin/EnteteHeader";
import Footer from "../admin/Footer";

import store from "../../store";
import "../../styles/App.scss";

const AppIndex = () => {
  return (
    <>
      <Provider className="container card appIndex" store={store}>
        <Router>
          <div className="appIndex">
            <Navbar />
            <div className="container content-wrappe">
              <div className="container p-3">
                <Switch>
                  <Route path="/appIndex" component={Contacts} />
                  <Route path="/contacts/add" component={AddContact} />
                  <Route path="/contacts/edit/:id" component={EditContact} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
      <EnteteHeader />
      <Footer />
    </>
  );
};

export default AppIndex;
