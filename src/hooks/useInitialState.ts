import { useState } from 'react';
import initialState from '../initialState';
const useInitialState = () => {
  const [state, setstate] = useState(initialState);
  const addToCart = (payload: any) => {
    setstate({ ...state, cart: [...state.cart, payload] });
  };

  const removeFromCart = (payload: any) => {
    setstate({
      ...state,
      cart: [...state.cart.filter((items) => items.id !== payload.id)],
    });
  };

  const addToBuyer = (payload: any) => {
    setstate({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const addNewOrder = (payload: any) => {
    setstate({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
