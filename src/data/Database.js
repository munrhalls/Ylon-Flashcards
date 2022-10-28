import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCh4nWeX10IODhaj5434ozFONMAFJAXtRY",
  authDomain: "ylon-flashcards.firebaseapp.com",
  projectId: "ylon-flashcards",
  storageBucket: "ylon-flashcards.appspot.com",
  messagingSenderId: "951199163671",
  appId: "1:951199163671:web:527f98493ce5a360550352",
  measurementId: "G-7594B6CGNP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const analytics = getAnalytics(app);
