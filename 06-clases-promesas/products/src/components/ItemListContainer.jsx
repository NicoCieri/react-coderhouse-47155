import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../services/products";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProducts(result.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return <ItemList products={products} isLoading={isLoading} />;
};

export default ItemListContainer;
