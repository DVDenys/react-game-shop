import HomePage from "@Pages/HomePage";
import GamePage from "@Pages/GamePage";
import OrderPage from "@Pages/OrderPage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/app/:title',
        element: <GamePage />
    },
    {
        path: '/order',
        element: <OrderPage />
    },
]

export default routesConfig;