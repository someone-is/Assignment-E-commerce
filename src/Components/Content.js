import React, { createContext, useReducer, useEffect, useState } from "react";
import { products } from "./data.mjs";
import { reducer } from "./reducer.js";
import ContentItem from "./ContentItem.js";
import Navigation from './Navigation.js';
import Content2 from './Content2';
import ShoppingCart from "./ShoppingCart.js";
export const CartContext = createContext();
const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
    Addcart: [],
};
const Content = () => {
const [cart, setcart] = useState(false);
const showCart = () => setcart(!cart);

    const [state, dispatch] = useReducer(reducer, initialState);
    const IncreMent = (id) => {
        return dispatch({
            type: "INCREASE",
            payload: id,
        });
    };

    const DecereSe = (id) => {
        return dispatch({
            type: "DECERESE",
            payload: id,
        });
    };
    const AddToCart = (id) => {
        return dispatch({
            type: "ADDTOCART",
            payload: id,
        });
    };
    const DecrementCart =(id) =>{
        return dispatch({
            type: "CARTDEC",
            payload: id,
        });
    };
    const removefromCart =(id) =>{
        return dispatch({
            type: "DELETE",
            payload: id,
        });
    }
    
    useEffect(() => {
        dispatch({ type: "TOTAL" });
    }, [state.item]);
    const [Addcart,setAddcart] = useState([]);
    const clicktocart=(itm)=>{
        Addcart.push(itm);
        console.log(Addcart);
        if (Addcart.indexOf(itm)!== -1) return;
        setAddcart([...Addcart,itm])
        return Addcart;
    }
    return (
        <CartContext.Provider value={{ ...state, IncreMent, DecereSe,AddToCart,showCart, DecrementCart, clicktocart ,removefromCart}}>
            <Navigation />
            <ContentItem/>
            <Content2/>
            <nav className={cart ? 'ShoppingCartss active' : 'ShoppingCartss'}>
            <ShoppingCart Addcart={Addcart}/>
            </nav>
        </CartContext.Provider>
    )

}
export default Content;