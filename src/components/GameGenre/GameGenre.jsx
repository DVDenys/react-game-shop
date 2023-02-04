import PropTypes from "prop-types";
import styles from "./GameGenre.css";

const GameGenre = ({ genre }) => {
  return <span className="game-genre">{genre}</span>;
};

GameGenre.propTypes = {
  genre: PropTypes.string,
};

export default GameGenre;
