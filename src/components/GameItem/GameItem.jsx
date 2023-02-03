import PropTypes from 'prop-types';
import GameCover from '../GameCover';
import GameBuy from '../GameBuy'
import styles from './GameItem.css';

const GameItem = ({ game }) => {
    return (
        <article className='game-item'>
            <GameCover image={game.image}/>
            <div className='game-item__details'>
                <span className='game-item__title'>{game.title}</span>
                <div className="game-item__genre">
                    {
                        game.genres.map(genre => genre)
                    }
                </div>
                <div className="game-item__buy"><GameBuy game={game} /></div>
            </div>
        </article>
    )
}

GameItem.propTypes = {
    game: PropTypes.object,
}

export default GameItem;