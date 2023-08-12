// Crear una promesa

const promise = new Promise((resolve, reject) => {
  const operacionExitosa = false;

  if (operacionExitosa) {
    resolve("La operación fue exitosa!");
  } else {
    reject("La operación no fue exitosa!");
  }
});

// Consumir una promesa
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Se terminó la promesa");
  });

console.log("Fin del programa");
