import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDq4fTJMO84jAsf8cjIu_b4Nbi8JE4EUBI",
  authDomain: "instantblooddonorfinder.firebaseapp.com",
  projectId: "instantblooddonorfinder",
  storageBucket: "instantblooddonorfinder.appspot.com",  // fixed here
  messagingSenderId: "632011153179",
  appId: "1:632011153179:web:86a8f01c5d445367fd7dbe",
  measurementId: "G-MPCV82T1CM"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
