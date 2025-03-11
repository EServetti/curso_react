import "../../styles/ItemListContainer/itemListContainer.css";
import Item from "./item";
import { useState } from "react";
import { useEffect } from "react";
import CategoriesList from "./categoriesList";
import SearchBox from "./searchBox";
import useGames from "../../hooks/useGames"

const ItemListContainer = ({page}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [displayGames, setDisplayGames] = useState([]);
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  // uso un useEffect para cambiar el valor de width cada ves que se
  // cambie el tamaño de la ventana y asi mostrar 3 o 4 juegos por fila
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {games, loading} = useGames()

  useEffect(() => {
    if (loading) return
    let filteredGames = games;
    if (page === "onSale") {
      filteredGames = filteredGames.filter((g) => g.onSale === true);
    }
    if (page === "bestSellers") {
      filteredGames = filteredGames.filter((g) => g.bestSeller === true);
    }
    if (category) {
      filteredGames = filteredGames.filter((g) => g.category === category); // Filtra por categoría si hay una seleccionada
    }
    if (inputValue) {
      filteredGames = filteredGames.filter(
        (g) =>
          g.name.toLowerCase().trim().includes(inputValue.toLowerCase().trim()) // Filtra por nombre si hay un valor en inputValue
      );
    }
    setDisplayGames(filteredGames);
  }, [category, inputValue, page, loading]);

  return (
    <div className="main-item-list-container">
      <section className="filter-bar">
        <SearchBox setInputValue={setInputValue} inputValue={inputValue} />
        <CategoriesList isNameSelected={inputValue} setCategory={setCategory} category={category}/>
      </section>
      <div
        className={
          width < 1000 ? "item-list-container-three" : "item-list-container"
        }
      >
        {loading ? (
          <span style={{position: "absolute", top: "50%", right: "50%"}}>Loading...</span>
        ) : (
          displayGames.map((game) => (
            <Item
              key={game.id}
              id={game.id}
              name={game.name}
              thumbnail={game.thumbnail}
              onSale={game.onSale}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
