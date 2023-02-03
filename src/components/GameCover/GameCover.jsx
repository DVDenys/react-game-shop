import PropTypes from 'prop-types';
import styles from './GameCover.css';

const GameCover = ({ image }) => {
    return (
        <div className='game-cover' style={{backgroundImage: `url(${image})`}} />
    )
}

GameCover.propTypes = {
    image: PropTypes.string,
}

export default GameCover;