import { useParams } from "react-router-dom";
// import { products } from "../datas/productList";
import "../styles/ProductDetails.css";
import Cart from "./Cart";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductDetails({ cart, updateCart }) {
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  // const product = products && products.find((product) => product.id === id);
  const fetchData = () => {
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
    axios.get(`https://127.0.0.1:8000/api/products/${id}`).then((resp) => {
      setProduct(resp.data);
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  function addToCart(name, price, id) {
    const currentProductAdded = cart.find((product) => product.name === name);
    if (currentProductAdded) {
      const cartFilteredCurrentProduct = cart.filter(
        (product) => product.name !== name
      );
      updateCart([
        ...cartFilteredCurrentProduct,
        { name, price, id, amount: currentProductAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, id, amount: 1 }]);
    }
  }
  


  return (
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
          <div className="product-price">
            <span>{product.price} €</span>
            <span className="unit">{product.unit}</span>
           <button className="bn632-hover bn22" onClick={() => addToCart(product.name, product.price, product.id)}>Ajouter</button>
          </div> 
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart} updateCart={updateCart} />
      </div>
    </div>
  );
}
