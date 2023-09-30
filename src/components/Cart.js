import "../styles/Cart.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Cart({ cart, updateCart }) {
  const total = cart.reduce(
    (acc, productType) => acc + productType.amount * productType.price,
    0
  );

  const handleRemoveProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    updateCart(newCart);
  }

  return (
    <div className="cart">
      <h2>Panier</h2>

      {cart.length > 0 ? (
        <div className="cart-details">
          <ul>
            {cart.map(({ name, price, amount, id }, index) => (
              <div
                key={`${name}-${index}`}
                className="name-price-qty-container"
              >
                <span className="name">
                  {name} <span className="price">({price}€) </span>{" "}
                </span>

                <span className="qty">x {amount}</span>
                <button onClick={() => handleRemoveProduct(id)}>X</button>
              </div>
              
            ))}
          </ul>
          <h3 className="total">Total : {total.toFixed(2)}€</h3>
          <Button
            bg={"white"}
            color={"#0ba360"}
            colorScheme="white"
            variant="outline"
            _hover={{ bg: "red.500", color: "white" }}
            onClick={() => updateCart([])}
          >
            Vider votre panier
          </Button>
          <Link to="/login">
            <Button
              bg={"white"}
              color={"#0ba360"}
              colorScheme="white"
              variant="outline"
              _hover={{ bg: "#0ba360", color: "white" }}
              isDisabled
            >
              Passer la commande
            </Button>
          </Link>
        </div>
      ) : (
        <div> Votre panier est vide</div>
      )}
    </div>
  );
}

export default Cart;
