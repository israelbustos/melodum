import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signOut } from '../../reducks/users/operation';
import { push } from 'connected-react-router';
import { useEffect } from 'react';
import signin from '../../containers/Signin';
import cartimg from '../../assets/img/cart.png';
import logo from '../../assets/img/logooo.svg';

export default function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };

    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);

    return (
        <div>
            <section class="nav">
                <div class="logo">
                    <img src={logo} alt="logo" />
                    <h2>Melodum</h2>
                </div>
                <div class="melodum">
                    {checkUser ? (
                        <span class="logout" onClick={signOutButton}>
                            Logout
                        </span>
                    ) : (
                        <a href="/signin" class="">
                            Sign In
                        </a>
                    )}
                    {checkUser && (
                        <p class="img">
                            <a href="/cart">
                                <img src={cartimg} alt="" />
                            </a>
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
}
