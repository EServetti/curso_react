import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/navBar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetails from "./components/ItemDetails/itemDetails";

function App() {
  const [page, setPage] = useState("home")

  return (
    <Router>
      <div className="main">
        <NavBar setPage={setPage}/>
        <Routes>
          <Route path="/" element={<ItemListContainer page={page}/>} />
          <Route path="/:id" element={<ItemDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
