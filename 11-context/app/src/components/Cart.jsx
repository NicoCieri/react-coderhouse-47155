import { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart, addItem, removeItem, clear } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Cart</h1>

      <p>
        <button onClick={clear} className="btn btn-secondary">
          Vaciar carrito
        </button>
      </p>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            ID: {item.id} - Cantidad: {item.quantity}
            <br />
            <button
              onClick={() => addItem(item.id, 1)}
              className="btn btn-primary me-2"
            >
              Agregar
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="btn btn-danger"
            >
              Remover item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
