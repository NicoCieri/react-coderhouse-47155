import ToggleButton from "./components/ToggleButton";
import Counter from "./components/Counter";
import Card from "./components/Card";
import ListContainer from "./components/ListContainer";
import UserProfile from "./components/UserProfile";
import UserWelcomeWithUser, { UserWelcome } from "./components/UserWelcome";
import CounterRenderProps from "./components/CounterRenderProps";

function App() {
  const user = { id: 2, name: "Nico", email: "nico@gmail.com" };
  return (
    <div>
      {/* Ejemplo de Children prop */}
      <Card>
        {/* Ejemplo de custom hook */}
        <ToggleButton />
      </Card>

      <hr />

      <Card>
        {/* Ejemplo de custom hook */}
        <Counter initial={10} />
      </Card>

      <hr />

      {/* List con HOC withLoading */}
      <ListContainer />

      <hr />

      {/* Componente recibiendo la prop user directamente */}
      <UserWelcome user={user} />

      <hr />

      {/* Componente recibiendo la prop user desde el HOC */}
      <UserWelcomeWithUser color="red" foo="bar" />

      <hr />

      {/* Otro componente recibiendo la prop user desde el HOC */}
      <UserProfile />

      {/* Ejemplo de Counter usando Render Props */}
      <CounterRenderProps>
        {(count, increment) => {
          return (
            <div>
              <h2>Count with Render Props: {count}</h2>
              <button onClick={increment}>Increment</button>
            </div>
          );
        }}
      </CounterRenderProps>

      <hr />

      {/* Otro ejemplo de Counter usando Render Props */}
      {/* Con un layout distinto */}
      <CounterRenderProps>
        {(count, sumar, restar) => {
          return (
            <Card>
              <button onClick={sumar}>Increment</button>
              <h2>Este es el otro counter con render props: {count}</h2>
              <button onClick={restar}>Decrement</button>
            </Card>
          );
        }}
      </CounterRenderProps>
    </div>
  );
}

export default App;
