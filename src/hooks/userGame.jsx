import { useEffect, useState } from "react";
import games from "../../games.json";

const useGame = (id) => {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = () => {
      setTimeout(() => {
        setGame(games.find(g => g.id == id));  
        setLoading(false);  
      }, 1000);
    };

    fetchGames();
  }, []);

  return { game, loading };
};

export default useGame;
