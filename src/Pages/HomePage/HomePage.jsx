import GameItem from "@components/GameItem";

import { GAMES } from "@constants/games";

import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </section>
  );
};

export default HomePage;
