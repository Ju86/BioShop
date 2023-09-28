// import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import ProductDetails from "./ProductDetails";
// import Login from "./Login";


function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
     
        {/* <><Route path="/" element={<Login />} />
          
        </> */}
    
        <>
          <Route
            path="/home"
            element={
              <>
                <ShoppingList cart={cart} updateCart={updateCart} />
              </>
            }
          />
          <Route path="/account" element={<Account />} />
          <Route
            path="/details/:id"
            element={<ProductDetails cart={cart} updateCart={updateCart} />}
          />
      
        </>

    </Routes>
  );
}

export default App;
