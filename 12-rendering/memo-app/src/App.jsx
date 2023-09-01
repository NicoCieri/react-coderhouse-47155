import { useState } from "react";
import ItemList from "./components/ItemList";

function App() {
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState(["Manzana", "Banana", "Naranja"]);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      <button onClick={() => setFruits([...fruits, "Uvas"])}>
        Agregar Fruta
      </button>

      <hr />

      <ItemList items={fruits} />
    </div>
  );
}

export default App;
