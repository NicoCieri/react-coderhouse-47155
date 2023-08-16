import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  const handleQueryParams = () => {
    fetch("http://localhost:4000/api/query?name=Nico&age=29")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMensaje(data.message);
      });
  };

  const handleBodyParams = () => {
    fetch("http://localhost:4000/api/body", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Pedro", age: 31 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMensaje(data.message);
      });
  };

  return (
    <div>
      <h1>
        Mensaje desde backend: <span>{mensaje}</span>
      </h1>
      <button onClick={handleQueryParams}>Enviar con query params</button>
      <button onClick={handleBodyParams}>Enviar con body params</button>
    </div>
  );
}

export default App;
