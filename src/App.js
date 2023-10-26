import React from "react";
import { Header } from "./Components/Header/Index";
import Catalogo from "./Components/Productos/Catalogo";
import "boxicons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Catalogo />
    </div>

    
  );
}

export default App;
