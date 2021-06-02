import React, { Fragment, useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../../firebase";
import EnteteHeader from "./EnteteHeader";
import Menu from "./Menu";
import AppDashboard from "./AppDashboard";
import Footer from "./Footer";

const Header = (props) => {
  const firebase = useContext(FirebaseContext);
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : props.history.push("/");
    });

    if (userSession !== null) {
      firebase
        .user(userSession.userId)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            const myData = doc.data();
            setUserData(myData);
          }
        })
        .catch((error) => {});
    }

    return () => {
      listener();
    };
  }, [userSession]);

  // setTimeout(() => {
  //   const user = firebase.auth.onAuthStateChanged;
  //   if (setUserSession(user)) {
  //     setUserSession(user);
  //   } else {
  //     props.history.push("/");
  //   }
  // }, 2000);

  return userSession === null ? (
    <Fragment>
      <div className="loader"></div>
      <p className="loaderText">Chargement...</p>
    </Fragment>
  ) : (
    <div>
      <EnteteHeader />
      <Menu />
      <AppDashboard userData={userData} />
      <Footer />
    </div>
  );
};

export default Header;
