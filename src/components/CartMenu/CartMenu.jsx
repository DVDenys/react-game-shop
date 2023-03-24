import PropTypes from "prop-types";

import UiButton from "@components/UI/UiButton";
import CartItem from "@components/CartItem";
import { calcTotalPrice } from "@utils";

import "./CartMenu.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <>
      <div className="cart-menu">
        <div className="cart-menu__games-list">
          {items.length > 0
            ? items.map((game) => (
                <CartItem
                  key={game.title}
                  title={game.title}
                  price={game.price}
                  id={game.id}
                />
              ))
            : "Корзина пуста"}
        </div>
        {items.length > 0 ? (
          <div className="cart-menu__arrange">
            <div className="cart-menu__total-price">
              <span>Итого:</span>
              <span>{calcTotalPrice(items)} ₴</span>
            </div>
            <UiButton type="primary" size="m" onClick={onClick}>
              Оформить заказ
            </UiButton>
          </div>
        ) : null}
      </div>
    </>
  );
};

CartMenu.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};

export default CartMenu;
