// definir el metodo find en el prototipo de Array
Array.prototype.find = function (callback) {
  const array = this;

  for (let i = 0; i < array.length; i++) {
    const item = array[i]; // 1

    console.log("dentro del for", item);
    if (callback(item)) {
      return item;
    }
  }

  return undefined;
};

const estudiantes = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Pablo" },
];

// uso del metodo find
const result = estudiantes.find((estudiante) => estudiante.nombre === "Pedro"); // { id: 2, nombre: "Pedro" }

console.log(result);
