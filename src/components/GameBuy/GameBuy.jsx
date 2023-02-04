import PropTypes from 'prop-types';
import UiButton from '@ui/UiButton'
import styles from './GameBuy.css';

const GameBuy = ({ game }) => {
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} грн.</span>
            <UiButton 
                onClick={()=>console.log('click')}
                type={"primary"}
            >
                В Корзину
            </UiButton>
        </div>
    )
}

GameBuy.propTypes = {
    game: PropTypes.object,
}

export default GameBuy;