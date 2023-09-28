import { useParams } from "react-router-dom";
// import { products } from "../datas/productList";
import "../styles/ProductDetails.css";
import Cart from "./Cart";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductDetails({ cart, updateCart }) {

  const [product, setProduct] = useState([]);

  const  {id} = useParams();
 
  console.log(id);
  // const product = products && products.find((product) => product.id === id);

  const fetchData =  () => {
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
    axios.get(`https://127.0.0.1:8000/api/products/${id}`).then(resp => {

    console.log(resp.data);
    setProduct(resp.data);
  });}

  useEffect(() => {
    fetchData();
  }, []);

  function addToCart(name, price) {
    const currentProductAdded = cart.find((product) => product.name === name);
    if (currentProductAdded) {
      const cartFilteredCurrentProduct = cart.filter(
        (product) => product.name !== name
      );
      updateCart([
        ...cartFilteredCurrentProduct,
        { name, price, amount: currentProductAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    // <div className="lbs-shopping-details">
    //   <div className="lbs-product-details-container">
    //   <h1>{product.name}</h1>

    //   <button
    //     className="bn632-hover bn22"
    //     onClick={() => addToCart(product.name, product.price)}
    //   >
    //     Ajouter au panier
    //   </button>
    //   </div>
    //   <div>
    //     <Cart cart={cart} updateCart={updateCart} />
    //   </div>
    // </div>
    <div className="lbs-shopping-details">
      <div className="wrapper">
        <div className="product-img">
          <img src={product.cover} height="420" width="327" alt="" />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{product.name}</h1>
            <h2>{product.category}</h2>
            <p>{product.details}</p>
          </div>
          <div className="product-price-btn">
            <p>
              <span>{product.price}</span>€
            </p>
            <button
              type="button"
              onClick={() => addToCart(product.name, product.price)}
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart} updateCart={updateCart} />
      </div>
    </div>
  );
}
