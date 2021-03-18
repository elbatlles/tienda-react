import React from 'react'
import {ProductType} from '../type/Types'
export type Cart = {
    
    addToCart: (payload: any) => void;
    removeFromCart: (payload: any) => void;
    state:{
        cart: any[];
        products:ProductType[];
    }

}

const AppContext = React.createContext<Cart>({
    
    addToCart: () => {},
    removeFromCart: () => {},
    state:{
        cart:[],
        products:[]
    },
   
    })

export default AppContext

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