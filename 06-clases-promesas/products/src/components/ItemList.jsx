const ItemList = ({ products, isLoading }) => {
  return (
    <div>
      <h2>Lista de productos</h2>

      {isLoading && <p>Cargando...</p>}

      {!isLoading && products.length === 0 && <p>No hay productos</p>}

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Stock: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
