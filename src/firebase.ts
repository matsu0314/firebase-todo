import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//auth
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//storage
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// export const storage = getStorage(firebaseApp);
// export const auth = getAuth(firebaseApp);
// export const provider = new GoogleAuthProvider();
