import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import GameCover from "@components/GameCover";
import GameBuy from "@components/GameBuy";
import GameGenre from "@components/GameGenre";
import { setCurrentGame } from "@store/games/reducer";
import "./GameItem.css";

const GameItem = ({ game }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    history(`/app/${game.title}`);
  };
  return (
    <article className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre, index) => (
            <GameGenre key={index} genre={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </article>
  );
};

GameItem.propTypes = {
  game: PropTypes.object,
};

export default GameItem;
