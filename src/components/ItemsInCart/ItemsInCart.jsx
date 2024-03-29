import PropTypes from "prop-types";
import "./ItemsInCart.css";

const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="items-in-cart">{quantity}</div> : null;
};

ItemsInCart.propTypes = {
  quantity: PropTypes.number,
};

export default ItemsInCart;
