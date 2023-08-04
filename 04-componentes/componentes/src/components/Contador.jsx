/* eslint-disable react/prop-types */

// Contador es un componente que recibe 3 props:
// count: un numero que representa el valor del contador
// incrementar: una funcion que incrementa el contador
// reducir: una funcion que reduce el contador
// Contador no sabe nada de donde vienen estas funciones ni el valor del contador
// solo sabe que tiene que mostrar el valor del contador y que cuando se haga click
// en los botones tiene que ejecutar las funciones que recibe por props
const Contador = ({ count, incrementar, reducir }) => {
  return (
    <div>
      <h2>Contador {count}</h2>
      <button className="btn btn-primary me-2" onClick={incrementar}>
        Incrementar
      </button>
      <button className="btn btn-danger" onClick={reducir}>
        Reducir
      </button>
    </div>
  );
};

export default Contador;
