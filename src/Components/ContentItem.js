import React, { useContext } from 'react'
import CartItems from "./CartItems.js";
import { CartContext } from "./Content"
const ContentItem = () => {
    const { item,button,setbutton } = useContext(CartContext);

    return (
        <>
            <h2 className='heading'>Groceries</h2>
            <hr />
            <div className="things">

                {
                    item.map((CurrentIt) => {
                        return <CartItems key={CurrentIt.id} {...CurrentIt} itm={CurrentIt} sbu={setbutton} bu={button} />
                    })
                }


            </div>
        </>
    )
}

export default ContentItem