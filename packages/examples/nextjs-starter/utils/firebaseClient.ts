import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCHUU9l7VscMraFs6ywzxVmuFXxe9WGHF4",
  authDomain: "solana-signin.firebaseapp.com",
  projectId: "solana-signin",
  storageBucket: "solana-signin.appspot.com",
  messagingSenderId: "562858491234",
  appId: "1:562858491234:web:31a45b2348bbd38f1f003b",
};

// Initialize Firebase
export const firebaseClient = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseClient);
export async function signIn(data: Record<string, string>) {
  const userCredential = await signInWithCustomToken(auth, data.token);
  return userCredential;
}

export const signOut = () => {
  return auth.signOut();
};
