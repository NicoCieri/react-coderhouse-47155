import { useState } from "react";
import TextComponent1 from "./components/TextComponent1";
import TextComponent2 from "./components/TextComponent2";
import TextComponent3 from "./components/TextComponent3";
import Message from "./components/Message";
import Loader from "./components/Loader";

function App() {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <h1>App</h1>
      <button
        onClick={() => setCondition(!condition)}
        className="btn btn-primary"
      >
        Toggle condition
      </button>

      <Loader loading />

      <hr />

      <TextComponent1 condition={condition} />

      <hr />

      <TextComponent2 condition={condition} />

      <hr />

      <TextComponent3 condition={condition} />

      <hr />

      <Message name="John" type="saludo" />

      <hr />

      <Message name="David" type="despedida" />
    </div>
  );
}

export default App;
