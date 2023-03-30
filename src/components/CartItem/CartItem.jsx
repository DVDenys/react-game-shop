import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "@store/cart/reducer";
import closeButton from "./img/close-button.png";


import "./CartItem.css";

const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} ₴</span>
        <img
        src={closeButton}
        alt="close button"
        width="24px"
        className="cart-item__delete-icon"
        onClick={handleClick}
      />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
};

export default CartItem;
