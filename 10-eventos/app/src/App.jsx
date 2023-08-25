import { useState } from "react";
import BackgroundChanger from "./components/BackgroundChanger";
import TextField from "./components/TextField";
import ColorSelector from "./components/ColorSelector";
import ContactForm from "./components/ContactForm";

function App() {
  const [showBackgroundChanger, setShowBackgroundChanger] = useState(false);

  const handleToggle = (event) => {
    // console.log("handleToggle", event.target);

    setShowBackgroundChanger(!showBackgroundChanger);
  };

  return (
    <div>
      <h1>App</h1>
      <button onClick={handleToggle}>
        {showBackgroundChanger ? "Ocultar" : "Mostrar"}
      </button>

      {showBackgroundChanger && <BackgroundChanger />}

      <hr />

      <TextField />

      <hr />

      <ColorSelector />

      <hr />

      <ContactForm />
    </div>
  );
}

export default App;
