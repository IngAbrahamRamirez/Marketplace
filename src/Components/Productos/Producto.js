import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Index";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../Reducers/CartSlice";
import "./Producto.css";

function Producto() {
 
  const [data, setData] = useState([]);
  const [id] = useState(useParams().id);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity }));
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/"+id);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return (
    <div className="App">
      <Header />
      <div className="Organizar"><br></br><br></br><br></br><br></br><br></br>
      <div key={data.id} className="product-itemP">
        <img src={data.image} alt={data.title} />
        <h1>{data.price} $</h1>
        <h1>{data.title}</h1>
        <p>{data.category}</p>
        <p>{data.description}</p>
        <div className="BotonesP">
        <input
              type="number"
              min="1"
              value={data.quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />       
        <button className="btn1P" onClick={() => handleAddToCart(data)}>
        Añadir al carrito
      </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Producto;
