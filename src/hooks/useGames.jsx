import { useEffect, useState } from "react";
import g from "../../games.json";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = () => {
      setTimeout(() => {
        setGames(g);  
        setLoading(false);  
      }, 1000);
    };

    fetchGames();
  }, []);

  return { games, loading };
};

export default useGames;
