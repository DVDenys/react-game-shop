// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import CartMenu from "@components/CartMenu";
import { calcTotalPrice } from "@utils";
import ItemsInCart from "@components/ItemsInCart"

import cartImg from "./img/shopping-cart.png";
import "./CartBlock.css";
import { useState } from "react";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <img
        src={cartImg}
        width="32"
        alt="cart icon"
        className="cart-block__icon"
        onClick={() => {
          setIsCartMenuVisible(!isCartMenuVisible);
        }}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} ₴</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

// CartBlock.propTypes = {
//     text: PropTypes.string
// }

export default CartBlock;
