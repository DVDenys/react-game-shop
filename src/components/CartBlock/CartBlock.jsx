import PropTypes from 'prop-types';

import cartImg from './img/shopping-cart.png'
import styles from './CartBlock.css';

const CartBlock = () => {
    return (
        <div className='cart-block'>
            <img src={cartImg} width='32' alt="cart icon" className='cart-block__icon' />
            <span className='cart-block__total-price'>0 ₴</span>
        </div>
    )
}

CartBlock.propTypes = {
    text: PropTypes.string
}

export default CartBlock;