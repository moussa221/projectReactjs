import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBHe9DQk4U7oL_LOi63-7nqoDgs40LKqB0",
  authDomain: "bakeliproject.firebaseapp.com",
  projectId: "bakeliproject",
  storageBucket: "bakeliproject.appspot.com",
  messagingSenderId: "417482443352",
  appId: "1:417482443352:web:2c22d12017298e021d582d",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    //implementer l'API d'authentification
    this.auth = app.auth();
    this.db = app.firestore();
  }

  //inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //deconnexion
  signoutUser = () => this.auth.signOut();

  user = (userId) => this.db.doc(`users/${userId}`);
}
export default Firebase;
