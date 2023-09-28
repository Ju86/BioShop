import "../styles/ProductItem.css";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <li className="lbs-product-item">
      <span className="lbs-product-item-price">{product.price}€ </span>
      <img className="lbs-product-item-cover" src={product.cover} alt="" />
      <h2 className="lbs-product-name">{product.name}</h2>
     <span className="unit">{product.unit}</span> 
      <Link to={`/details/${product.id}`}>
        <button
          className="bn632-hover bn22"
        >
          Voir Produit
        </button>
      </Link>
    </li>
  );
}

export default ProductItem;
