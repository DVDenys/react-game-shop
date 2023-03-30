import { useSelector } from "react-redux";
import OrderItem from "@components/OrderItem";
import { calcTotalPrice, morph } from "@utils";
import "./OrderPage.css";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>;
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} key={game.title} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} {morph(items.length)} на сумму {calcTotalPrice(items)} ₴
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
