import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/navBar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
