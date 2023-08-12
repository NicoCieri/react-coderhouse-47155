import { Component } from "react";

class ContadorConClase extends Component {
  constructor() {
    // Llamar al constructor de la clase padre
    super();

    // inicializar nuestro estado
    this.state = {
      count: 0,
    };
  }

  incrementar = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementar = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  // Metodos del ciclo de vida de un componente de clase

  componentDidMount() {
    console.log("El componente de clase se montó en el DOM");
  }

  componentWillUnmount() {
    console.log("El componente de clase se desmontará del DOM");
  }

  // se ejecuta después de cada render
  componentDidUpdate(prevProps, prevState) {
    console.log("El componente de clase se renderizó");
    console.log({ prevProps, prevState });
    if (prevState.count !== this.state.count) {
      console.log("El estado cambió");
    }
  }

  render() {
    return (
      <div>
        <h1>Contador con clase: {this.state.count}</h1>

        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }
}

export default ContadorConClase;
