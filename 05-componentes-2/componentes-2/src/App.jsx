import { useState } from "react";
import InformationCard from "./components/InformationCard";
import Card from "./components/Card";
import InputFocus from "./components/InputFocus";
import BackgroundChanger from "./components/BackgroundChanger";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  const user = {
    name: "Juan",
    age: 25,
    details: {
      profession: "Programador",
    },
    hobbies: ["Futbol", "Videojuegos", "Programar"],
  };

  return (
    <div>
      <Card>
        <h2>Soy el contenido</h2>
      </Card>

      <Card color="lightblue">
        <p>Lorem ipsum</p>
      </Card>

      <Card>
        <InformationCard
          name={user.name}
          age={user.age}
          details={user.details}
          hobbies={user.hobbies}
          handleClick={() => alert(`Hola, soy ${user.name}`)}
        />
      </Card>

      <hr />

      <InputFocus />

      <hr />

      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Ocultar componente" : "Mostrar componente"}
      </button>

      {showComponent && <BackgroundChanger />}
    </div>
  );
}

export default App;
