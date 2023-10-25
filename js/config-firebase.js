
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import{getFirestore} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8ZFhK2n1bdX8Z-XvW7DgjjO0RDZZ5mkw",
    authDomain: "projeto-tarefa-firebase.firebaseapp.com",
    projectId: "projeto-tarefa-firebase",
    storageBucket: "projeto-tarefa-firebase.appspot.com",
    messagingSenderId: "354216985679",
    appId: "1:354216985679:web:becffd9af88f3f147c163a"
  };

  // Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
