import { combineReducers } from 'redux';
import CartSlice from './CartSlice';

const rootReducer = combineReducers({
  cart: CartSlice, 
});

export default rootReducer;