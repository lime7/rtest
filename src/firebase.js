import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDx25v3GMhIfFvMFlA2BsTeCOqQ6a7yAao",
  authDomain: "reactapp-bc20c.firebaseapp.com",
  projectId: "reactapp-bc20c",
  storageBucket: "reactapp-bc20c.appspot.com",
  messagingSenderId: "512314771847",
  appId: "1:512314771847:web:3f01f5928b51af2d8c6b22"
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
