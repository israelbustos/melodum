import React from 'react';
import Home from './Home';
import logo from '../assets/img/logooo.svg'
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useState } from 'react';
import { signIn } from '../reducks/users/operation';


const Signin = () => {
    const dispatch = useDispatch();
  
    const closeButton = () => {
      dispatch(push("/"));
    };
  
    const [email, setEmail] = useState(""),
      [password, setPassword] = useState("");
  
    const inputEmail = (event) => {
      setEmail(event.target.value);
    };
  
    const inputPassword = (event) => {
      setPassword(event.target.value);
    };
  
    const signInButton = () => {
      dispatch(signIn(email, password));
      setEmail("");
      setPassword("");
    };

    return (
        <div>
            <Home/>
            <section class="signin">
                <div class="logo">
                    <img src={logo} alt="logo" />
                    <h2>Melodum</h2>
                </div>
                <div class="sign">
                    <ul>
                        <h2>SIGN IN</h2>
                        <li>
                            <input type="email" onChange={inputEmail} placeholder="Email Address" id="email" value={email} />
                        </li>
                        <li>
                            <input type="password" onChange={inputPassword} placeholder="Password" id="password" value={password} required />
                        </li>
                        <li>
                           <button class="submit" onClick={signInButton}>Sign In</button>
                        </li>
                        <li>
                            <p>
                                Already a Member?<a href="/Signup">Join Us</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Signin;
