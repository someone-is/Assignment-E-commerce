import React, { useState } from 'react'
import './login.css';
import Newaccount from './Newaccount';
import { AiFillHome } from "react-icons/ai";
function Login({ logAcc, setdetails, details, showdetails, logdetails, setlogdetails, showdetailsLogin ,incorrect,error,home}) {
  const [CreateAcc, setCreateAcc] = useState(true);
  const NewAccount = () => { setCreateAcc(!CreateAcc) };
  return (
    <>
      <div className={logAcc ? 'vnull' : 'body2'}>
        <div className={logAcc ? 'vnull' : 'cotainer'}>
          <div className="homee">
            <i className='Homecart' onClick={() => home()}><AiFillHome size="1.5em" /> <span>Home</span> </i>
          </div>
          <div className="logoonlogin">Magic<img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-magic-entertainment-xnimrodx-lineal-gradient-xnimrodx.png" width={"40px"} alt="logo" />Cart</div>
          <div className={CreateAcc ? 'boxLog' : 'boxLogvisi'}>
            <h1 className='he'>sign in</h1>
            <span className={error ? 'incorrect' : 'incorrectvisi'}>{incorrect}</span>
            <form className='formlogin' onSubmit={showdetailsLogin} >
              <div className="Emailid">
                <label htmlFor="email" className='lable'>Email/Mobile</label>
                <input type="text" className='Enter' name='email' placeholder='Enter your mobile/Email' autoComplete='off' onChange={e => setlogdetails({ ...logdetails, email: e.target.value })} value={logdetails.email} />
              </div>
              <div className="Passsword">
                <label htmlFor="password" className='lable'>Password</label>
                <input type="Password" className='Enter' name='password' placeholder='Password' onChange={e => setlogdetails({ ...logdetails, password: e.target.value })} value={logdetails.password} />
              </div>
              <div className="lobu">
                <button type='submit' className='Loginbutton' >Login</button>
              </div>
            </form>
            <hr />
            <div className="lobu2">
              <button type='submit' className='Loginbutton2' onClick={() => NewAccount()}>Create New Account</button>
            </div>
          </div>
        </div>
        <Newaccount CreateAcc={CreateAcc} NewAccount={NewAccount} setdetails={setdetails} details={details} showdetails={showdetails} />
      </div>
    </>
  )
}

export default Login