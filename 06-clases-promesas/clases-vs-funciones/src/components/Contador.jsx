import { useState, useEffect } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  // Solo se va a ejecutar en el montaje del componente
  useEffect(() => {
    console.log("El componente funcional se montó en el DOM");

    // Se ejecuta cuando el componente se desmonta
    return () => {
      console.log("El componente funcional se desmontará del DOM");
    };
  }, []);

  // Se ejecuta después de cada render
  useEffect(() => {
    console.log("El componente funcional se renderizó");
  });

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default Contador;
