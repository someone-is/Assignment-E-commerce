import React,{ useContext } from 'react'
import { BiRupee } from "react-icons/bi";
import { CartContext } from './Content';
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";

const ShoppingCartItem = ({image,name,ourprice,id,no}) => {
    const {IncreMent ,DecrementCart,removefromCart} = useContext(CartContext);
    return (
        <>
               <div className="itlistitem">
            <div className="photo"><img src={image} height={100} alt="" />
            <div className="des">{name}</div></div>
            <div className="quantity">
                <i className='minuses'onClick={() => DecrementCart(id)}><AiOutlineMinus/></i>
                <div className="numbere" >{no}</div>
                <i className='pluses' onClick={() => IncreMent(id)}><AiOutlinePlus/></i>
            </div>
            <div className="cost"> <div className="money"><i><BiRupee /></i> {ourprice}</div>   <i className='delete' onClick={() =>removefromCart(id)}><AiFillDelete/></i></div>
        </div>
        </>
    )
}

export default ShoppingCartItem
