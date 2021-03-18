import { useState } from "react";
 import  initialState from '../initialState'
const useInitialState =() =>{
const [state, setstate] = useState(initialState)
const addToCart = (payload: any) =>{
setstate(
   { ...state,
cart:[...state.cart,payload]}
)
}

const removeFromCart = (payload:   any ) =>{
    setstate(
        { ...state,
     cart:[...state.cart.filter(items => items.id !==payload.id)]}
     )

}

return {
    addToCart,removeFromCart,state
}
}

export default useInitialState