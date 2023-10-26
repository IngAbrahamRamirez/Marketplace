import { createSlice } from '@reduxjs/toolkit';
const { localStorage } = window;


const initialCartState = localStorage.getItem('cartSlice') 
  ? JSON.parse(localStorage.getItem('cartSlice'))
  : { items: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { 
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.items.find(item => item.product.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
      localStorage.setItem('cart', JSON.stringify(initialCartState));
      alert("Se ha agrageado al carrito");
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(initialCartState));
      alert("Se ha quitado del carrito");
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const productItem = state.items.find(item => item.product.id === productId);
      localStorage.setItem('cart', JSON.stringify(initialCartState));

      if (productItem) {
        productItem.quantity = quantity;
      }
    },
  },
});


export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export default cartSlice.reducer;


