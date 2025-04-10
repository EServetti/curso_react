import { useEffect, useState } from "react";
import { getGames } from "../firebase";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const g = await getGames()
        setGames(g)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };

    fetchGames();
  }, []);

  return { games, loading };
};

export default useGames;
