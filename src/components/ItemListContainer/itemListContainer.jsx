import "../../styles/ItemListContainer/itemListContainer.css";
import Item from "./item";
import games from "../../../games.json";
import { useState } from "react";
import { useEffect } from "react";
import CategoriesList from "./categoriesList";
import SearchBox from "./searchBox";

const ItemListContainer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [displayGames, setDisplayGames] = useState([])
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("")
  // uso un useEffect para cambiar el valor de width cada ves que se
  // cambie el tamaño de la ventana y asi mostrar 3 o 4 juegos por fila
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let filteredGames = games;
    if (category) {
      filteredGames = filteredGames.filter((g) => g.category === category); // Filtra por categoría si hay una seleccionada
    }
    if (inputValue) {
      filteredGames = filteredGames.filter((g) =>
        g.name.toLowerCase().trim().includes(inputValue.toLowerCase().trim()) // Filtra por nombre si hay un valor en inputValue
      );
    }
    setDisplayGames(filteredGames);
  }, [category, inputValue]);
  

  return (
    <div className="main-item-list-container">
      <section className="filter-bar">
        <SearchBox setInputValue={setInputValue}/>
        <CategoriesList isNameSelected={inputValue} setCategory={setCategory}/>
      </section>
      <div
        className={
          width < 1000 ? "item-list-container-three" : "item-list-container"
        }
      >
        {displayGames.map((game) => (
          <Item
            key={game.id}
            name={game.name}
            photo={game.photo}
            onSale={game.onSale}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
