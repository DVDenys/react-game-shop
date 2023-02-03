import PropTypes from 'prop-types';
import styles from './GameBuy.css';

const GameBuy = ({ game }) => {
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} грн.</span>
            {/* <Button /> */}
        </div>
    )
}

GameBuy.propTypes = {
    game: PropTypes.object,
}

export default GameBuy;