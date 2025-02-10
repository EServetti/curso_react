import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/navBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <div className="main">
      <NavBar/>
      <ItemListContainer filter={"classic games"}/>
    </div>
  )
}

export default App
