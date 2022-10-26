// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    // GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXIVbup1PVqKjABsweegwCnlcX35wBRhk",
  authDomain: "dtsggmadz.firebaseapp.com",
  projectId: "dtsggmadz",
  storageBucket: "dtsggmadz.appspot.com",
  messagingSenderId: "419678642532",
  appId: "1:419678642532:web:e61460412bf178329c5a71",
  measurementId: "G-TQF6HNDWWG"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider()
googleProvider.addScope("email");
googleProvider.addScope('profile');

const registerUserWithEmailPass = async (email, password) => {
    try {
        
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential);
    } catch (error) {
        console.log(error)
        
    }
    
}

const signinUserWithEmailPass = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredential);
    } catch (error) {
        console.log(error)
        
    }
    
}

const signinUserWithGoogle = async() => {
    try {
        const userCredential = await signInWithPopup(auth, googleProvider)

    } catch (error) {
        console.log(error)
        
    }
}

const logout = async () => {
    try {
        await signOut(auth)
        
    } catch (error) {
        console.log(error)
    }
   
}

export {
    auth,
    registerUserWithEmailPass,
    signinUserWithEmailPass,
    logout,
    signinUserWithGoogle,
}


// Initialize Firebase
