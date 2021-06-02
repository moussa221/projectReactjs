import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase, { FirebaseContext } from "./firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "./administration/cours/styles.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

reportWebVitals();
