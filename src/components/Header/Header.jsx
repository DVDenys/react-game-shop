import { Link } from "react-router-dom";

import CartBlock from "@components/CartBlock";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <Link to="/" className="header__list-link">
                Game Shop
              </Link>
            </li>
            <li className="header__list-item header__list-cart">
              <CartBlock />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
