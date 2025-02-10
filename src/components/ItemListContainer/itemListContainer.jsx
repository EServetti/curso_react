import "../../styles/ItemListContainer/itemListContainer.css";
import Item from "./item";

const ItemListContainer = ({ filter }) => {
  console.log(filter);

  const games = [
    {
      id: 1,
      name: "Elden Ring",
      description:
        "Un RPG de acción en un mundo abierto creado por FromSoftware y George R.R. Martin.",
      photo:
        "https://media.vandal.net/m/102076/elden-ring-20216121316990_1.jpg",
      price: 59.99,
    },
    {
      id: 2,
      name: "Cyberpunk 2077",
      description:
        "Un juego de rol de mundo abierto ambientado en una metrópolis futurista.",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgDZlp73uHvKgps4h6zvJfUbbI3KLDybdWw&s",
      price: 49.99,
    },
    {
      id: 3,
      name: "God of War Ragnarök",
      description:
        "Kratos y Atreus emprenden un viaje en busca de respuestas antes del fin del mundo nórdico.",
      photo:
        "https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/SZRc7OMwGgv8lJXIOlYyuBU2.jpg",
      price: 69.99,
    },
    {
      id: 4,
      name: "The Legend of Zelda: Tears of the Kingdom",
      description:
        "Link regresa a Hyrule con nuevas habilidades para enfrentar el mal.",
      photo:
        "https://assetsio.gnwcdn.com/co5vmg.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      price: 59.99,
    },
    {
      id: 5,
      name: "Red Dead Redemption 2",
      description:
        "Un western épico en mundo abierto con una historia profunda y jugabilidad realista.",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEm1HcM1dTm4qZNdc_CLkUv6NQSbxYyaleWA&s",
      price: 39.99,
    },
    {
      id: 6,
      name: "Hollow Knight",
      description:
        "Un metroidvania desafiante con un hermoso estilo artístico y una historia misteriosa.",
      photo:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/03/hollow-knight-portada.jpg?tf=384x",
      price: 14.99,
    },
  ];
  return (
    <div className="item-list-container">
      {games.map((game) => (
        <Item
          key={game.id}
          name={game.name}
          photo={game.photo}
          description={game.description}
          price={game.price}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
