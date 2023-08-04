import { useState } from "react";
import Contador from "./Contador";

// ContadorContainer es un componente que maneja el estado del contador
// y se lo pasa al componente Contador
// También tiene toda la lógica de incrementar y reducir el contador
const ContadorContainer = () => {
  const [count, setCount] = useState(0);

  const manejarIncrementacion = () => {
    if (count !== 10) {
      setCount(count + 1);
    }
  };

  const reducir = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <Contador
      count={count}
      incrementar={manejarIncrementacion}
      reducir={reducir}
    />
  );
};

export default ContadorContainer;
