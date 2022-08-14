import React, { useContext, useState } from 'react'
import { BiRupee } from "react-icons/bi";
import { CartContext } from './Content';


const CartItems = ({ image, name, ourprice, mrp, off, id, no, itm, unit }) => {
    const { IncreMent, DecereSe, clicktocart } = useContext(CartContext);
    const [button, setbutton] = useState(true)
    const Setbu=()=>{
        if (no<=1) {
            setbutton(true)
        }
        return
    }
    return (
        <>
            <div className="tile">
                <div className="thumbnail"><img src={image} alt="" /></div>
                <div className="DandB">
                    <div className="details">
                        <div className="name">{name}</div>
                        <div className="rate">
                            <div className="ourprice"><i><BiRupee /></i><span>{ourprice}{unit}</span></div>
                            <div className="mrp">M.R.P<p><i><BiRupee /></i>{mrp}</p><span>({off}% off)</span></div>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="buttons">

                            {
                                button ? <div className="IandD"> <button type="button" className="btn btn-warning" id='Bluebutton' onClick={() => clicktocart(itm, setbutton)} >Add to Cart</button>  </div> : null
                            }
                            {
                                button ?
                                    null :

                                    <div className="IandD">
                                        <button className='minus' onClick={() => {
                                            DecereSe(id) 
                                            Setbu()
                                            }}>
                                            <span>-</span></button>
                                        <div className="number" >{no}</div>
                                        <button className='plus' onClick={() => IncreMent(id)}><span>+</span></button>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems

