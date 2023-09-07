import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Importar Firebase
import { initializeApp } from "firebase/app";

// Configuracion Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBYedvYqPL2q6dellViFsESX-ipUF3UlsI",
  authDomain: "coder-react-20d24.firebaseapp.com",
  projectId: "coder-react-20d24",
  storageBucket: "coder-react-20d24.appspot.com",
  messagingSenderId: "330292341050",
  appId: "1:330292341050:web:be768bf38bf7f534bb8803",
};

// Inicializar Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
