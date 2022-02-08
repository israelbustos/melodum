import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {signUp} from '../reducks/users/operation'
import Home from './Home'
import logo from '../assets/img/logooo.svg'



const Signup = () => {
  const dispatch = useDispatch();
  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };

    return (
        <div>
            <Home/>
            <section class="signin">
        <div class="logo">
            <img src={logo} alt="logo"/>
            <h2>Melodum</h2>
        </div>
        <div class="sign">
            <ul>
                <h2>SIGN UP</h2>
                <li>
                    <input type="text" onChange={inputUserName} placeholder="UserName" id="username" value={user_name} required/>
                  </li>
                <li>
                  <input type="email" onChange={inputEmail} placeholder="Email Address" id="email" value={email}
                  required/>
                </li>
                <li>
                    <input type="password" onChange={inputPassword} placeholder="Password" id="password" value={password}
                  required />
                  </li>
                  <li>
                    <button type="submit" class="submit" onClick={signUpButton}>JOIN US</button>
                  </li>
                  <li>
                  <p>Already a Member?<a href="Signin">Sign In</a></p>
                  </li>
                  </ul>
                </div>
    </section>
        </div>
    )
}

export default Signup
