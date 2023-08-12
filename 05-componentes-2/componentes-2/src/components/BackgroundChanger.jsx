import { useState, useEffect } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("white");

  // SOlo se va a ejecutar en el montaje del componente
  useEffect(() => {
    console.log("El componente se montó en el DOM");

    console.log("******* LLAMADA A API *********");

    // Se ejecuta cuando el componente se desmonta
    return () => {
      console.log("El componente se desmontará del DOM");
    };
  }, []);

  // Solo se llama cuando cambia color
  useEffect(() => {
    console.log(`El color cambió a ${color}`);
  }, [color]);

  // Se ejecuta después de cada renderizado
  useEffect(() => {
    console.log("El componente se renderizó");
  });

  return (
    <div
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: 5,
      }}
    >
      <h1>Cambia el color de fondo:</h1>

      <button onClick={() => setColor("lightblue")}>Azul</button>
      <button onClick={() => setColor("lightgreen")}>Verde</button>
      <button onClick={() => setColor("lightcoral")}>Rojo</button>
    </div>
  );
};

export default BackgroundChanger;
