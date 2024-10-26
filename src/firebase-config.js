import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvJcjaea8VB90Jd9sRDUJghNgDk6dc75k",
  authDomain: "carauctionimage.firebaseapp.com",
  projectId: "carauctionimage",
  storageBucket: "carauctionimage.appspot.com",
  messagingSenderId: "116541028599",
  appId: "1:116541028599:web:6fcd1150a0ee013c40bbf2",
  measurementId: "G-5J9JP5B0PT",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
