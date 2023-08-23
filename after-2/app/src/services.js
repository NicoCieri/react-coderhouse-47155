const products = [
  { id: "1", name: "iPhone 12", price: 799, category: "phones" },
  { id: "2", name: "iPhone 12 Pro", price: 999, category: "phones" },
  { id: "3", name: "iPhone 12 Pro Max", price: 1099, category: "phones" },
  { id: "4", name: "iPad Pro", price: 799, category: "tablets" },
  { id: "5", name: "iPad Air", price: 599, category: "tablets" },
  { id: "6", name: "iPad", price: 329, category: "tablets" },
  { id: "7", name: "MacBook Air", price: 999, category: "notebooks" },
  { id: "8", name: "MacBook Pro 13-inch", price: 1299, category: "notebooks" },
  { id: "9", name: "MacBook Pro 16-inch", price: 2399, category: "notebooks" },
];

// getProduct
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // buscamos el producto por id
      const product = products.find((p) => p.id === id);

      // si existe el producto
      if (product) {
        resolve(product);
      } else {
        reject("No existe el producto");
      }
    }, 1000);
  });
};

// getProducts() -> devuelve todos los productos
// getProducts("phones") -> devuelve todos los productos de la categoría phones
// getProducts("tablets") -> devuelve todos los productos de la categoría tablets
// getProducts("notebooks") -> devuelve todos los productos de la categoría notebooks
export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Si category existe filtramos por categoría
      // Si category no existe devolvemos todos los productos

      const productsFiltered = category
        ? products.filter((product) => product.category === category)
        : products;

      resolve(productsFiltered);
    }, 1000);
  });
};
