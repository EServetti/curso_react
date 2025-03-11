import "../../styles/ItemListContainer/searchBox.css"

const SearchBox = ({setInputValue, inputValue}) => {

    const handleChange = (e) => {
        const {value} = e.target
        setInputValue(value)
    }

    return (
        <input value={inputValue} type="text" className="search-box" placeholder="Find a game" onChange={handleChange}/>
    )
}
export default SearchBox