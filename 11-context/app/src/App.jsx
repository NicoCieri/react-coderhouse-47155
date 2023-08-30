import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import UserProvider from "./context/UserProvider";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <div>
          <Navbar />

          <Cart />

          <hr />

          <UserProfile />
        </div>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
