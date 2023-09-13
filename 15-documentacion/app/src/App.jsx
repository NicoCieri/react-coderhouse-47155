// Inicio del código
import "./style.css";
import { useState } from "react";
import Field from "./components/Field";

export default function App() {
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    age: "",
  });

  const { name, surname, age } = formState;

  const onChange = (event) => {
    setFormState({
      // name: formState.name,
      // surname: formState.surname,
      // age: formState.age,
      ...formState,
      [event.target.name]: event.target.value,
      // surname: 'el neuvo valor'
    });
  };

  const isFormValid = name && surname && age;

  const onSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      console.log(`Your name is ${name} ${surname} and you have ${age} years`);
    }
  };

  return (
    <div>
      <h1>Ingresa tus datos para completar la compra 🛍</h1>

      <form onSubmit={onSubmit}>
        <Field label="Nombre" name="name" onChange={onChange} />
        <Field label="Apellido" name="surname" onChange={onChange} />
        <Field label="Edad" name="age" onChange={onChange} />

        <button disabled={!isFormValid} type="submit">
          Crear orden
        </button>
      </form>
    </div>
  );
}
