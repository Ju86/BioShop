import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import ProductDetails from "./ProductDetails";
import Register from "./Register";
import Login from "./Login";


function App() {
  
  const savedCart = localStorage.getItem("cart");
  console.log(savedCart);
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route
        path="/"
        element={
          <>
            <ShoppingList cart={cart} updateCart={updateCart} />
          </>
        }
      />
      <Route
        path="/details/:id"
        element={<ProductDetails cart={cart} updateCart={updateCart} />}
      />
    </Routes>
  );
}

export default App;
