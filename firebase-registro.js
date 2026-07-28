// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_4r6XYFc-wG2pm_hJTZIsq5LKonZ6i1A",
    authDomain: "tejiendo-redes-a96cc.firebaseapp.com",
    projectId: "tejiendo-redes-a96cc",
    storageBucket: "tejiendo-redes-a96cc.firebasestorage.app",
    messagingSenderId: "480673206144",
    appId: "1:480673206144:web:88dd498ff7e1945c5a7b65",
    measurementId: "G-DCVT6LWJS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const formulario = document.getElementById("registroFormulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    try {
        await addDoc(collection(db, "registros"), {
            nombre,
            email,
            fecha: new Date().toISOString(),
        });
        mensaje.textContent = "¡Registro exitoso!";
        formulario.reset();
    } catch (error) {
        mensaje.textContent = "Error: " + error.message;
    }
});