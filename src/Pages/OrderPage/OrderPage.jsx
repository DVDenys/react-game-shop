import { useSelector } from "react-redux";
import OrderItem from "@components/OrderItem";
import { calcTotalPrice } from "@utils";
import "./OrderPage.css";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.lenght < 1) {
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
            {items.lenght} товаров на сумму {calcTotalPrice(items)} ₴
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
