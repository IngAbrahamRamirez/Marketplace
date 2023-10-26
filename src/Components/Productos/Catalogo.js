import React, { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Catalogo.css"
import { useDispatch } from 'react-redux';
import { addToCart} from "../../Reducers/CartSlice";

export const DataCatalogo = createContext();

function Catalogo() {

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity }));
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return (
    <div>
      <h1>Productos</h1>
      <div className="product-list">
        {data.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/producto/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h1>{product.title}</h1>
                <p>{product.price} $</p>
                </Link>
              <div className="Botones">  
              <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />       
              <button className="btn1" onClick={() => handleAddToCart(product)}>
                Añadir al carrito
              </button>
              <Link to={`/producto/${product.id}`}>
            <button className="btn2">
              Detalles
              </button> 
              </Link> 
            </div>
          </div>
        ))}
      </div>
      </div>
      
);
}

export default Catalogo;
