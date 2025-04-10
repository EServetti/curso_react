import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/navBar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetails from "./components/ItemDetails/itemDetails";
import NotFound from "./components/notFound";
import Cart from "./components/Cart/cart";
import CartContextProvider from "./context/cartContext";
import fs from "fs"

function App() {
  const [page, setPage] = useState("home");

  return (
    <Router>
      <div className="main">
        <CartContextProvider>
          <NavBar setPage={setPage} />
          <Routes>
            <Route path="/" element={<ItemListContainer page={page} />} />
            <Route path="/product/:id" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
