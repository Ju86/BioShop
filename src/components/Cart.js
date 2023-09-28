import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
 
  const total = cart.reduce(
    (acc, productType) => acc + productType.amount * productType.price,
    0
  );

  return (
    <div className="lmj-cart">
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total : {total}€</h3>
          <button onClick={() => updateCart([])}>Vider votre panier</button>
        </div>
      ) : (
        <div> Votre panier est vide</div>
      )}
    </div>
  );
}

export default Cart;
