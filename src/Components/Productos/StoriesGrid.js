import React from 'react';
import './StoriesGrid.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart} from "../../Reducers/CartSlice";

const handleAddToCart = (product) => {
  dispatch(addToCart({ product, quantity }));}

const StoriesGrid = ({ data }) => {
  return (
    <div className="stories-grid">
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
          value={product.quantity}
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
  );
};

export default StoriesGrid;