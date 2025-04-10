import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByqIQ7MTyoGTI-cuYOpdmwxEl8yCsgaTc",
  authDomain: "e-commerce-coderhouse-1750f.firebaseapp.com",
  projectId: "e-commerce-coderhouse-1750f",
  storageBucket: "e-commerce-coderhouse-1750f.firebasestorage.app",
  messagingSenderId: "683347789182",
  appId: "1:683347789182:web:bd47ce8e48b46974365f2f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getGames = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Items")); 
    const games = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return games;
  } catch (error) {
    throw error;
  }
};

export const getSingleGame = async (id) => {
  try {
    const querySnapshot = await getDoc(doc(db, "Items",id))
    const game = {
        id: querySnapshot.id,
        ...querySnapshot.data()
    }
    return game
  } catch (error) {
    throw error;
  }
};

export const createCheck = async (data) => {
  try {
    const querySnapshot = await addDoc(collection(db,"purchaseReceipts"), data)
    return `The purchase has been completed!, purchase id: ${querySnapshot.id}`
  } catch (error) {
    throw error
  }
}