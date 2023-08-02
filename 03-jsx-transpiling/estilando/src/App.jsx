import styles from "./App.module.css";

function App() {
  const products = [
    { id: 1, name: "Iphone", price: 800, stock: 10 },
    { id: 2, name: "Macbook Pro", price: 1200, stock: 5 },
    { id: 3, name: "Ipad", price: 600, stock: 2 },
    { id: 4, name: "Apple Watch", price: 400, stock: 0 },
    { id: 5, name: "Macbook Air", price: 1000, stock: 8 },
    { id: 6, name: "Airpods", price: 200, stock: 10 },
    { id: 7, name: "Magic Mouse", price: 100, stock: 0 },
    { id: 8, name: "Magic Keyboard", price: 150, stock: 10 },
  ];

  const productListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: 16,
      }}
    >
      <h1>Products</h1>
      <div style={productListStyle}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <img
              src={`https://picsum.photos/id/${product.id}/300/300`}
              alt={product.name}
              style={{ width: "100%" }}
            />
            <span className={styles.productTitle}>{product.name}</span>
            <span>{product.price}</span> <span>{product.stock}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
