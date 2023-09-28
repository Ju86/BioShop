import "../styles/Banner.css";
import logo from "../assets/logo.webp";
import accountLogo from "../assets/pngwing.com.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="lbs-banner">
      <div className="lbs-banner-row">
        <Link to="/home">
          <img src={logo} alt="Le Bio Shop" className="lbs-logo" />
        </Link>
        <Link to="/account">
          <img src={accountLogo} alt="Account" className="lbs-logo-account" />
        </Link>
      </div>
    </div>
  );
}

export default Banner;
