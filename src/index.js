import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Carrito from './Components/Productos/Carrito';
import Producto from './Components/Productos/Producto';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Store';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
  {
    path: "/producto/:id",
    element: <Producto />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
