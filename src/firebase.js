import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlE9_sFdNwj57dp1F3dSYhDe_sCaj5lp0",
  authDomain: "jkxlogin-d9e69.firebaseapp.com",
  projectId: "jkxlogin-d9e69",
  storageBucket: "jkxlogin-d9e69.firebasestorage.app",
  messagingSenderId: "651402145177",
  appId: "1:651402145177:web:e7671b0589d50cc0243708",
  measurementId: "G-EZ6M0TJ4PT",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

//criar a autenticacão com o google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export async function signinWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Erro no login :", error);
    throw error;
  }
}

//encerrar o login
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erro ao sair", error);
    throw error;
  }
}

export { auth, googleProvider, app, analytics };
