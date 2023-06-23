import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Cart/home";
import Cart from "./Cart/cart";
import { CartProvider } from "react-use-cart";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
};

export default App;
