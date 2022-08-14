import React, { createContext, useReducer, useEffect, useState } from "react";
import { products } from "./data.mjs";
import { reducer } from "./reducer.js";
import ContentItem from "./ContentItem.js";
import Navigation from './Navigation.js';
import Content2 from './Content2';
import ShoppingCart from "./ShoppingCart.js";
import { Toaster, toast } from "react-hot-toast";

export const CartContext = createContext();
const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
    item_cart: [],
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

    const DecereSe = (id, setbutton) => {
        return dispatch({
            type: "DECERESE",
            payload: id,
            buttns: setbutton,
        });
    };
    const AddToCart = (id) => {
        return dispatch({
            type: "ADDTOCART",
            payload: id,
        });
    };
    const DecrementCart = (id) => {
        return dispatch({
            type: "CARTDEC",
            payload: id,
        });
    };
    const removefromCart = (id) => {
        return dispatch({
            type: "DELETE",
            payload: id,
        });
    }

    useEffect(() => {
        dispatch({ type: "TOTAL" });
    }, [state.item, state.item_cart]);
    const clicktocart = (itm, setbutton) => {
        state.item_cart.push(itm);
        console.log(state.item_cart);
        state.totalItem = itm.no + 1;
        setbutton(false)
        toast.success(`${itm.name} added to the cart`);

        // const [Addcart, setAddcart] = useState(cartproducts);
        // console.log(Addcart);
        // if (Addcart.indexOf(itm) !== -1) return;
        // else {
        //     setAddcart([...Addcart, ...itm]);

        // }
    }
    const clicktocarts = (itm) => {
        const checkcart = state.item_cart.find((itms) => itms.id === itm.id);
        if (checkcart) {
            toast.success(`(${itm.no + 1}) ${itm.name} added to the cart`);
            ++state.totalItem;
            state.totalAmount = state.totalAmount + (itm.ourprice * itm.no);
            state.item_cart.map((curElem) => {
                if (curElem.id === itm.id) {
                    itm.no = curElem.no + 1;
                    return { ...curElem, };
                }
                return curElem;
            });
        }
        else {
            state.item_cart.push(itm);
            toast.success(`${itm.name} added to the cart`);
            ++state.totalItem;
            state.totalAmount = state.totalAmount + (itm.ourprice * itm.no);
            state.item_cart.map((curEleme) => {
                if (curEleme.id === itm.id) {
                    itm.no = 1;
                    return { ...curEleme, };
                }
                return curEleme;
            });
            //     console.log(Addcart);
            //     if (Addcart.indexOf(itm) !== -1) return;
            //     else {
            //         setAddcart([...Addcart, ...itm]);
            //     }
        }
    }
    return (
        <CartContext.Provider value={{ ...state, IncreMent, DecereSe, clicktocart, clicktocarts, AddToCart, showCart, DecrementCart, removefromCart }}>
            <Navigation />
            <Toaster />
            <h1>hi</h1>
            <ContentItem />
            <Content2 />
            <nav className={cart ? 'ShoppingCartss active' : 'ShoppingCartss'}>
                <ShoppingCart />
            </nav>
        </CartContext.Provider>
    )

}
export default Content;