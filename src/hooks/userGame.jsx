import { useEffect, useState } from "react";
import { getSingleGame } from "../firebase";

const useGame = (id) => {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const g = await getSingleGame(id)
        setGame(g)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };

    fetchGames();
  }, []);

  return { game, loading };
};

export default useGame;
