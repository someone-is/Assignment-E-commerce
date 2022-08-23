import './App.css';
import React, { useState } from 'react';
import Content from './Components/Content.js';
import Login from './Components/login/Login';
import { toast, Toaster } from 'react-hot-toast';
import Account from './Components/Account/Account';

function App() {
  const [logAcc, setlogAcc] = useState(true);
  const [Accountopen, setAccountopen] = useState(true);

  const loggedin = [];

  const Accountlog = () => {
    if (navlogin === "Login") {
      setlogAcc(!logAcc)
      console.log(logAcc)
      setpurchaseb("Login")
      // setAccountopen(!Accountopen);
    }
    else if (navlogin === "Account") {
      setAccountopen(!Accountopen);
      console.log(Accountopen)
      setpurchaseb("Purchase")
      // setlogAcc(!logAcc)
    }
  }
const [purchaseb, setpurchaseb] = useState('Login')
  const purchase = () => {
    if (navlogin === "Login") {
      setlogAcc(!logAcc)
      console.log(logAcc)
      // setAccountopen(!Accountopen);
    }
    else if (navlogin === "Account") {
      toast.success(`Do you really think that we deliver`);
    }
  }
  const [details, setdetails] = useState({ name: '', surname: '', email: '', mobile: '', password: '' });
  const logout = () => {
    toast.success(`${details.name} ${details.surname} Successfully logged out`);
    setAccountopen(!Accountopen);
    setdetails({ name: '', surname: '', email: '', mobile: '', password: '' });
    setlogdetails({ email: '', password: '' });
    setnavlogin("Login")
    setpurchaseb("Login")
  }
  const home = () => {
    setlogAcc(true);
    setAccountopen(true);
  }
  const storeddata = () => {
    loggedin.push(details)
  }
  const showdetails = (e) => {
    console.log(details);
    storeddata();
    console.log(loggedin);
    e.preventDefault();
  }
  const [navlogin, setnavlogin] = useState("Login")
  const [error, seterror] = useState(false);
  const [logdetails, setlogdetails] = useState({ email: '', password: '' });
  const [incorrect, setincorrect] = useState();
  const showdetailsLogin = (e) => {
    e.preventDefault();
    if ((details.email === logdetails.email || details.mobile === logdetails.email) && details.password === logdetails.password) {
      toast.success(`WELCOME ${details.name} ${details.surname}`);
      console.log(logdetails);
      setincorrect("")
      seterror(false)
      setnavlogin("Account")
      setpurchaseb("Purchase")
      console.log(error, incorrect)

    }
    else {
      setincorrect("Incorrect password or email-id")
      seterror(true)
      setnavlogin("Login")
      setpurchaseb("Login")
      console.log(error, incorrect)
    }

  }

  return (
    <div>
      <div className={logAcc ? 'content' : 'vnull'}>
        <Content Accountlog={Accountlog} logAcc={logAcc} navlogin={navlogin} purchase={purchase} purchaseb={purchaseb}/>
      </div>
      <Toaster />
      <Login Accountlog={Accountlog} logAcc={logAcc} setdetails={setdetails} details={details} showdetails={showdetails} showdetailsLogin={showdetailsLogin} setlogdetails={setlogdetails} logdetails={logdetails} incorrect={incorrect} error={error} home={home} />
      <Account Accountlog={Accountlog} Accountopen={Accountopen} details={details} logout={logout} home={home} />
    </div>
  );
}

export default App;
