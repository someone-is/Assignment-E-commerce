import React, { useContext } from 'react'
import { BiRupee } from "react-icons/bi";
import { CartContext } from './Content';
import ShoppingCartItem from "./ShoppingCartItem";
const ShoppingCart = () => {
    const { item, totalAmount, showCart } = useContext(CartContext);
    return (
        <>
            <div className="ShoppingCart">
                <div className="top">
                    <div className="head">Your Cart</div>
                    <div className="cross" onClick={() => showCart()}>X</div>
                </div>
                <div className="headds">
                    <div className="itl">Product</div>
                    <div className="qty">Quantity</div>
                    <div className="amont">Amount</div>
                </div>
                <div className="itlist">
                    {
                        item.map((CurrentIt) => {
                            return <ShoppingCartItem key={CurrentIt.id} {...CurrentIt} />
                        })
                    }

                </div>
                <div className="footna">
                    <div className="totaL">Total</div>
                    <div className="totalcost"><i><BiRupee /></i> {totalAmount}</div>
                </div>
                <div className="realfooter">
                    <div className="proceed">
                        <button type="button" className="btn btn-warning" id='button2'>Purchase</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart