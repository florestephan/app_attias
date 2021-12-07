import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC3cFqwsdJ3VsZ0niVEORhDY9mczkjkqWA",
  authDomain: "app-attias.firebaseapp.com",
  projectId: "app-attias",
  storageBucket: "app-attias.appspot.com",
  messagingSenderId: "481390989529",
  appId: "1:481390989529:web:e6c8598fffbd4622dd2ec8"
};


class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }


  //Connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //Deconnexion
  signoutUser = () => this.auth.signOut();

}

export default Firebase;
