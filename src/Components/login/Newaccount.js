import React from 'react'
import './login.css';
import { GrClose } from "react-icons/gr";
const Newaccount = ({ CreateAcc, NewAccount, details, setdetails, showdetails }) => {

    return (
        <>
            <div className={CreateAcc ? 'Newbodyvisi' : 'Newbody'}>
                <div className={CreateAcc ? 'boxLogCreatevisi' : 'boxLogCreate'}>
                    <div className="titleandcross">
                        <h1 className='her'>sign in <p>it's quick and easy.</p></h1>
                        <div className="crosser" ><i className='cr' onClick={() => NewAccount()}><GrClose /></i></div>
                    </div>
                    <form className='formlogin' onSubmit={showdetails} >
                        <div className="NameandSurname">
                            <div className="name">
                                <label htmlFor="name" className='lable'>First Name</label>
                                <input type="text" className='Enter' name='name' id='name' placeholder='First Name' autoComplete='off'  onChange={e => setdetails({ ...details, name: e.target.value })} value={details.name} />
                            </div>
                            <div className="name">
                                <label htmlFor="surname" className='lable'>Surname</label>
                                <input type="text" className='Enter' name='surname' id='surname' placeholder='Surname' autoComplete='off'  onChange={e => setdetails({ ...details, surname: e.target.value })} value={details.surname} />
                            </div>
                        </div>
                        <div className="Emailid2">
                            <label htmlFor="email" className='lable'>Email-Id</label>
                            <input type="email" className='Enter' name='email' id='email' placeholder='Enter your Email-Id' autoComplete='off'  onChange={e => setdetails({ ...details, email: e.target.value })} value={details.email} />
                        </div>
                        <div className="NameandSurname">
                            <div className="Emailid2">
                                <label htmlFor="mobile" className='lable'>Mobile No.</label>
                                <input type="number" className='Enter' name='mobile' id='mobile' placeholder='Mobile no.' onChange={e => setdetails({ ...details, mobile: e.target.value })} value={details.mobile} />
                            </div>
                            <div className="Passsword2">
                                <label htmlFor="password" className='lable'>Password</label>
                                <input type="Password" className='Enter' name='password' id='password' placeholder='New Password' onChange={e => setdetails({ ...details, password: e.target.value })} value={details.password} />
                            </div>
                        </div>
                        <hr />
                        <div className="lobu2">
                            <button type='submit' className='Loginbutton3' onClick={() => NewAccount()} >Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Newaccount