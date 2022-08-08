import React, { useContext } from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { CartContext } from './Content';

const Navigation = () => {
    const {totalItem, showCart}=useContext(CartContext);
 
    return (
        <div className='navigation'>
            <div className="containr">
                <div className="smallscreen"><img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-magic-entertainment-xnimrodx-lineal-gradient-xnimrodx.png" width={"40px"} alt="logo" /></div>
                <div className="logo">Magic<img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-magic-entertainment-xnimrodx-lineal-gradient-xnimrodx.png" width={"40px"} alt="logo" />Cart</div>
                <ul>
                    <li>home</li>
                    <li>Login</li>
                    <i><RiShoppingCart2Line onClick={() =>showCart()}/></i>
                    <p className='circularNo' >{totalItem}</p>
                </ul>
                
            </div>
        </div>
    )
}
export default Navigation;