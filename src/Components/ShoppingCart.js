import React, { useContext } from 'react'
import { BiRupee } from "react-icons/bi";
import { CartContext } from './Content';
import ShoppingCartItem from "./ShoppingCartItem";
import { GrClose } from "react-icons/gr";
const ShoppingCart = () => {
    const { totalAmount, showCart, Addcart } = useContext(CartContext);
    const isEmpty = !Addcart.length;
    const EmptyCart = () => (
        <>
        <div className="EmptyCartcontainer">
            <div className="crossempty">
        <div className="cross" onClick={() => showCart()}><i><GrClose /></i></div>
        </div>
        <h2 className='EmptyCart'>You have no item in your cart, start adding some!</h2>
        <div className="mygif">
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_47pyyfcf.json" speed="1"   loop  autoplay></lottie-player>
        </div>
        </div>
        </>
    )
    const FilledCart = () => (
        <>
            <div className="top">
                <div className="head">Your Cart</div>
                <div className="cross" onClick={() => showCart()}><i><GrClose /></i></div>
            </div>
            <div className="headds">
                <div className="itl">Product</div>
                <div className="qty">Quantity</div>
                <div className="amont">Amount</div>
            </div>
            <div className="itlist">
                {
                    Addcart.map((thisit) => {
                        return <ShoppingCartItem key={thisit.id} {...thisit} />
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
        </>
    )
    return (
        <>

            <div className="ShoppingCart">
                {isEmpty ? <EmptyCart/> : <FilledCart/>}
            </div>
        </>
    )
}

export default ShoppingCart