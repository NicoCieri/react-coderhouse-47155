import { useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: "1", name: "Samsung", price: 500 },
  { id: "2", name: "Apple", price: 1000 },
  { id: "3", name: "Xiaomi", price: 300 },
];

const Home = () => {
  useEffect(() => {
    console.log("Home se montó");

    return () => {
      console.log("Home se desmontó");
    };
  }, []);

  return (
    <div>
      <h1>Home</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <p>
                <b>{product.name}</b>
              </p>
              <p>
                <b>${product.price}</b>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
