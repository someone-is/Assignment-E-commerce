import React, { useContext } from 'react'
import { BiRupee } from "react-icons/bi";
import { CartContext } from './Content';
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";

const ShoppingCartItem = ({ image, name, ourprice, id, unit, no }) => {
    const { IncreMent, DecereSe, removefromCart } = useContext(CartContext);
    return (
        <>
            <div className="itlistitem">
                <div className="photoandname">
                    <div className="photo"><img src={image} height={100} alt="" /></div>
                    <div className="des">{name}</div></div>
                <div className="quantity">
                    <i className='minuses' onClick={() => DecereSe(id) }><AiOutlineMinus /></i>
                    <div className="numbere" >{no}</div>
                    <i className='pluses' onClick={() => IncreMent(id)}><AiOutlinePlus /></i>
                </div>
                <div className="cost"> <div className="money"><i><BiRupee /></i> {ourprice.toLocaleString('en-IN')}{unit}</div>   <i className='delete' onClick={() => removefromCart(id)}><AiFillDelete /></i></div>
            </div>
        </>
    )
}

export default ShoppingCartItem
