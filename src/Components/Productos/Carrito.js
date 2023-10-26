import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, selectCartItems } from '../../Reducers/CartSlice';
import { Header } from '../Header/Index';
import "./Carrito.css";

function Carrito() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

 

  return (
    <div className="App">
    <Header />
    <div className="Organizar"><br></br><br></br><br></br><br></br><br></br>
      <h2>Carrito de Compras</h2>
      <div className='product-list'>
      {cart.map((product) => ( 
        <div key={product.product.id} className="product-item">
        <Link to={`/producto/${product.id}`}>
                <img src={product.product.image} alt={product.product.title} />
                <h1>{product.product.title}</h1>
                <p>{product.product.price} $</p>
                </Link>
          <div className="Botones">
            <input
              type="number"
              min="1"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}/>
            <button className="btn1" onClick={() => handleRemoveFromCart(product)}>
              Eliminar del Carrito
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
    </div>
  );
};

export default Carrito;
