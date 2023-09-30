// import { products } from "../datas/productList";
import "../styles/ShoppingList.css";
import "../styles/index.css";
import Categories from "./Categories";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import Cart from "./Cart";

function ShoppingList({ cart, updateCart }) {

  const [activeCategory, setActiveCategory] = useState("");
  const [filter, setFilter] = useState("");

  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios.get("https://127.0.0.1:8000/api/products").then((resp) => {
      // console.log(resp.data["hydra:member"]);
      setProducts(resp.data["hydra:member"]);
    });
  };

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
    <Flex>
      <div className="shopping-list-container">
        <Categories
          categories={categories}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />

        <div className="search-container">
          <InputGroup borderRadius={5} w={"20%"}>
            <InputLeftElement pointerEvents="none" />
            <Input
              type="text"
              placeholder="Rechercher..."
              border="1px solid #0ba360"
              onInput={handleInput}
            />
          </InputGroup>
        </div>

        <div className="">
          <ul className="product-list">
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
        </div>
      </div>
      <div className="cart-container">
      <Cart cart={cart} updateCart={updateCart} />
      </div>
    </Flex>
  );
}

export default ShoppingList;
