import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyBFCMwh7-GP_K18XHU4uFKFp3xrHGDSd50",
    authDomain: "netflix-clone-cc490.firebaseapp.com",
    projectId: "netflix-clone-cc490",
    storageBucket: "netflix-clone-cc490.firebasestorage.app",
    messagingSenderId: "1085400670120",
    appId: "1:1085400670120:web:34a1d049259adbd44a879d",
    measurementId: "G-8Z1CP5M8D3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: name,
            email: email,
            authProvider: "local",
            createdAt: serverTimestamp()
        });
        console.log("User created successfully");
        toast.success("User created successfully");
    } catch (error) {
        console.log(error);
        toast.error(error.message.split("/")[1].split("-").join(" "));
    }
}

const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in successfully");
        toast.success("User logged in successfully");
    } catch (error) {
        console.log(error);
        toast.error(error.message.split("/")[1].split("-").join(" "));
    }
}

const logout = async () => {
    try {
        await signOut(auth);
        console.log("User logged out successfully");
        toast.success("User logged out successfully");
    } catch (error) {
        console.log(error);
        toast.error(error.message.split("/")[1].split("-").join(" "));
    }
}

export { app, auth, analytics, db, signup, login, logout };