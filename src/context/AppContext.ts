import React from 'react';
import { Cart, ProductType } from '../type/Types';

const AppContext = React.createContext<Cart>({
  addToCart: () => {},
  addToBuyer: () => {},
  addNewOrder: () => {},

  removeFromCart: () => {},
  state: {
    cart: [],
    orders: [],
    buyer: [],
    products: [],
  },
});

export default AppContext;

/*
    removeFromCart: (payload: any) => void;
    state: {
        cart: any[];
        products: {
            id: string;
            image: string;
            title: string;
            price: number;
            description: string;
        };
     
} */
