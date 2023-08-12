const productos = [
  { id: 1, name: "Escuadra", description: "Una escuadra", stock: 23 },
  { id: 2, name: "Calculadora", description: "Una calculadora", stock: 10 },
  {
    id: 3,
    name: "Globo Terráqueo",
    description: "Un globo terráqueo",
    stock: 5,
  },
  { id: 4, name: "Paleta", description: "Una paleta", stock: 8 },
];

// Crear la promesa
const promise = new Promise((resolve, reject) => {
  const operacionExitosa = true;

  setTimeout(() => {
    if (operacionExitosa) {
      resolve({ productos });
    } else {
      reject({ mensaje: "La operación no fue exitosa" });
    }
  }, 3000); // 3 segundos
});

// Consumir la promesa
promise
  .then(({ productos }) => {
    console.log(productos);
  })
  .catch((error) => {
    console.log(error.mensaje);
  })
  .finally(() => {
    console.log("Se terminó la promesa");
  });
