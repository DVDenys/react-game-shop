import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "@store/cart/reducer";
import UiButton from "@ui/UiButton";
import "./GameBuy.css";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemsInCart = items.some((item) => item.id === game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemsInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} грн.</span>
      <UiButton
        onClick={handleClick}
        type={isItemsInCart ? "secondary" : "primary"}
      >
        {isItemsInCart ? "Убрать из корзины" : "В Корзину"}
      </UiButton>
    </div>
  );
};

GameBuy.propTypes = {
  game: PropTypes.object,
};

export default GameBuy;
