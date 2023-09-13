import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";
import "./index.css";

// TODO: poner en un archivo separado .env
const firebaseConfig = {
  apiKey: "AIzaSyBYedvYqPL2q6dellViFsESX-ipUF3UlsI",
  authDomain: "coder-react-20d24.firebaseapp.com",
  projectId: "coder-react-20d24",
  storageBucket: "coder-react-20d24.appspot.com",
  messagingSenderId: "330292341050",
  appId: "1:330292341050:web:be768bf38bf7f534bb8803",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
