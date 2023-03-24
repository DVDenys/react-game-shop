import GameCover from "@components/GameCover";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "@store/cart/reducer";
import closeButton from "./img/close-button.png";
import "./OrderItem.css";

const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} ₴</span>
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

export default OrderItem;
