import React,{ useContext } from 'react'
import { BiRupee } from "react-icons/bi";
import { CartContext } from './Content';


const CartItems = ({image,name,ourprice,mrp,off,id,no,itm}) => {
    const {IncreMent ,DecereSe,clicktocart} = useContext(CartContext);
    return (
        <>
            <div className="tile">
                <div className="thumbnail"><img src={image} alt="" /></div>
                <div className="DandB">
                    <div className="details">
                        <div className="name">{name}</div>
                        <div className="rate">
                            <div className="ourprice"><i><BiRupee /></i><span>{ourprice}</span></div>
                            <div className="mrp">M.R.P<p><i><BiRupee /></i>{mrp}</p><span>({off}% off)</span></div>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="buttons">
                            <button type="button" className="btn btn-warning" id='Bluebutton' onClick={() => clicktocart(itm)} >Add to Cart</button>
                            <div className="IandD">
                                <button className='minus'onClick={() => DecereSe(id)}><span>-</span></button>
                                <div className="number" >{no}</div>
                                <button className='plus' onClick={() => IncreMent(id)}><span>+</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems

