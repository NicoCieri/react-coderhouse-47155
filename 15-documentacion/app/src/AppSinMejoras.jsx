// Inicio del código
import "./style.css";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  function onNameChange(evt) {
    setName(evt.target.value);
  }
  function onSurnameChange(evt) {
    setSurname(evt.target.value);
  }
  function onAgeChange(evt) {
    setAge(evt.target.value);
  }

  function onSubmit() {
    console.log(`Your name is ${name} ${surname} and you have ${age} years`);
  }

  return (
    <>
      <div>
        <>
          <h1>Ingresa tus datos para completar la compra 🛍</h1>
          <div style={{ display: "flex", marginBottom: 8 }}>
            <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
            <input type="text" onChange={(evt) => onNameChange(evt)} />
          </div>
        </>
        <>
          <div style={{ display: "flex", marginBottom: 8 }}>
            <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
            <input type="text" onChange={(evt) => onSurnameChange(evt)} />
          </div>
        </>
        <>
          <div style={{ display: "flex", marginBottom: 8 }}>
            <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
            <input type="text" onChange={(evt) => onAgeChange(evt)} />
          </div>
        </>

        {
          <button
            disabled={!(name !== "" && surname !== "" && age !== "")}
            onClick={(evt) => onSubmit(evt)}
            style={{}}
          >
            Crear orden
          </button>
        }
      </div>
    </>
  );
}
