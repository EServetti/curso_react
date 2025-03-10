import "../../styles/ItemListContainer/categoriesList.css";

const CategoriesList = ({ isNameSelected, setCategory }) => {

  const handleChange = (e) => {
    const {value} = e.target
    setCategory(value)
  }

  return (
    <select
      className="category-select"
      defaultValue={""}
      disabled={isNameSelected ? true : false}
      onChange={handleChange}
    >
      <option value="" disabled>
        Category
      </option>
      <option value="Adventure">Adventure</option>
      <option value="Action">Action</option>
      <option value="Sandbox">Sandbox</option>
      <option value="RPG">RPG</option>
      <option value="Sports">Sports</option>
      <option value="Platformer">Platformer</option>
      <option value="Metroidvania">Metroidvania</option>
      <option value="Shooter">Shooter</option>
      <option value="Battle Royale">Battle Royale</option>
      <option value="Horror">Horror</option>
      <option value="Roguelike">Roguelike</option>
      <option value="Simulation">Simulation</option>
      <option value="Party">Party</option>
    </select>
  );
};

export default CategoriesList;
