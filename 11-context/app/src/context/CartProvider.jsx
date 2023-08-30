import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 3,
    },
  ]);

  const addItem = (id, quantity) => {
    // item ya existe en cart?
    // si existe, sumar quantity
    // si no existe, agregar item a cart

    const itemInCart = cart.find((item) => item.id === id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });
      setCart(newCart);
    } else {
      // agregar item a cart
      setCart([...cart, { id, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    return !!itemInCart;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
