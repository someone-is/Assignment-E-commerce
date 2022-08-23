import React from 'react'
import './Account.css'
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
function Account({Accountopen,details,logout,home}) {
  return (
    <div className={Accountopen ? 'Accountbody' : 'Accountbodyvisi'} >
        <div className="homee">
            <div className="ele">
            <h2 onClick={() => logout()}>Logout</h2>
        <i className='Homecart' onClick={() => home()}><AiFillHome size="1.5em" /> <span>Home</span> </i>
        </div>
        </div>
        <div className={Accountopen ? 'upper' : 'uppervisi'}>
        <div className="profilephoto"><MdOutlineAccountCircle className='icon'/></div>
        <div className="Accdetails">
            <div className="namee">{details.name} {details.surname}</div>
            <p className='free'>A free user</p>
            <h3>Address</h3>
            <p className='address'>dwarka, new delhi, delhi, india pincode - 110077</p>
        </div>
        </div>
    </div>
  )
}

export default Account