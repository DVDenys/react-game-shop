import PropTypes from "prop-types";

import "./CartItem.css";

const CartItem = ({ title, price }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} ₴</span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
};

export default CartItem;
