/* eslint-disable react/prop-types */
import Card from "./components/Card";
import ContadorContainer from "./components/ContadorContainer";
// import Contador from "./components/Contador";

function App() {
  return (
    <div className="container">
      <h1>Probando Props</h1>
      {/* Probando Props */}
      <div className="row">
        <div className="col-4">
          <Card
            image="https://picsum.photos/id/1/300/300"
            title="Un titulo"
            description="Una descripcion"
          />
        </div>
        <div className="col-4">
          <Card
            image="https://picsum.photos/id/2/300/300"
            title="Otro titulo"
            description="Otra descripcion"
          />
        </div>
        <div className="col-4">
          <Card
            image="https://picsum.photos/id/3/300/300"
            title="Otra cosa"
            description="Una descripción distinta"
          />
        </div>
      </div>

      {/* Probando State y Hooks */}
      <ContadorContainer />
    </div>
  );
}

export default App;
