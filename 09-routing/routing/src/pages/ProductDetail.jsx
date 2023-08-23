import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: "1", name: "Samsung", price: 500 },
  { id: "2", name: "Apple", price: 1000 },
  { id: "3", name: "Xiaomi", price: 300 },
];

const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === id);

      if (!product) {
        reject("Producto no encontrado");
      }

      resolve(product);
    }, 2000);
  });
};

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId)
      .then((product) => {
        setProduct(product); // el producto cambia
      })
      .catch((error) => {
        console.log(error);
        setProduct(null);
      })
      .finally(() => {
        setIsLoading(false); // isLoading cambia
      });
  }, []);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div>
      <h1>Product Detail</h1>

      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
