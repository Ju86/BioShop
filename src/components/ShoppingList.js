// import { products } from "../datas/productList";
import "../styles/ShoppingList.css";
import Categories from "./Categories";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";


function ShoppingList({ cart, updateCart }) {

  const [activeCategory, setActiveCategory] = useState("");
  const [filter, setFilter] = useState("");

  const [products, setProducts] = useState([]);

  const fetchData =  () => {
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
    axios.get('https://127.0.0.1:8000/api/products').then(resp => {

    console.log(resp.data['hydra:member']);
    setProducts(resp.data['hydra:member']);
  });}

  useEffect(() => {
    fetchData();
  }, []);

  const categories = products.reduce(
    (acc, product) =>
      acc.includes(product.category) ? acc : acc.concat(product.category),
    []
  );

  const handleInput = (e) => {
    const search = e.target.value;
    setFilter(search.trim().toLowerCase());
  };

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <div className="lbs-search">
        <i></i>
        <input
          onInput={handleInput}
          type="text"
          placeholder="Rechercher"
          className="search-input"
        />
      </div>
      <div className="lbs-product-card-container">
        <ul className="lmj-plant-list">
          {products
            .filter((s) => s.name.toLowerCase().startsWith(filter))
            .map((product) =>
              !activeCategory || activeCategory === product.category ? (
                <div key={product.id}>
                  <ProductItem product={product} />
                </div>
              ) : null
            )}
        </ul>
        <div>
          <Cart cart={cart} updateCart={updateCart} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
