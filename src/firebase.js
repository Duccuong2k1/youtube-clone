import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDBk7M8w7-VniScb2Vj_3A0YmjaI9LULY4",
  authDomain: "clone-66a38.firebaseapp.com",
  projectId: "clone-66a38",
  storageBucket: "clone-66a38.appspot.com",
  messagingSenderId: "558795748948",
  appId: "1:558795748948:web:e28aa270eaf7edd6b69fc1"
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();