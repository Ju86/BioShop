import "../styles/Banner.css";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
// import {TbShoppingCart} from 'react-icons/tb';
import {BiUserCircle} from 'react-icons/bi';

function Banner() {
  return (
    <div className="lbs-banner">
      <div className="lbs-banner-row">
        <div>
        <Link to="/">
          <img src={logo} alt="Le Bio Shop" className="lbs-logo" />
        </Link>
        </div>
        <div className="lbs-icon">
        <Link to="/account">
          <BiUserCircle className="bn632-hover-icon bn22"/>
        </Link></div>
      </div>
    </div>
  );
}

export default Banner;
