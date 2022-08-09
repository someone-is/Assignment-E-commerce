import React,{useContext} from "react";
import { BiRupee } from "react-icons/bi";
import { products } from "./Data2.mjs";
import { CartContext } from './Content';
export default function Content2() {
    const {clicktocart} = useContext(CartContext);
    return (
        <>
            <h2 className='heading2'>Primary Early Deals<span>|</span>Electronics</h2>
            <hr />
            <div className="things2">
            {products.map(item => (
                <div className="tile2" key={item.id}>
                    <div className="thumbnail2"><img src={item.image} alt="" /></div>
                    <div className="DandB2">
                        <div className="details2">
                            <div className="name" id="nameP">{item.name}</div>
                            <div className="rate2">
                                <div className="ourprice"><i><BiRupee /></i><span>{item.ourprice}</span></div>
                                <div className="mrp">M.R.P <p><i><BiRupee /></i>{item.mrp}</p><span>{item.off}</span></div>
                            </div>
                        </div>
                        <div className="lower2">
                            <div className="buttons2">
                                <button type="button" className="btn btn-warning" id='Bluebutton2' onClick={() => clicktocart(item)} >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}
