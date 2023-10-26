import React from "react";
import Amazon from "../Imagenes/amazon.jpg";
import { Link } from "react-router-dom";
import "./Index.css";


export const Header = () => {
  return (
    <div className="DivH">
    <header>
      <Link to={"/"}>
        <div className="logo">
          <img src={Amazon} alt="logo" width="150"></img>
        </div>
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={'/producto/1'}>Productos</Link>{" "}
        </li>
      </ul>
      <Link to={"/carrito"}>
        <div className="cart">
          <box-icon name="cart" color="white"></box-icon>
          <span className="Total">10</span>
        </div>
      </Link>
    </header>
    </div>
  );
};
