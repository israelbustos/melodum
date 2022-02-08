import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { push } from 'connected-react-router';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';

const Item = ({ item }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const [particularCart, setParticularCart] = useState(null);
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY');

    useEffect(() => {
        if (carts != undefined && carts.length > 0) {
            console.log('carts');
            console.log(carts);
            let matchedCarts = carts.filter(cart => cart.item.id == item.id);
            console.log('matchedCarts');
            console.log(matchedCarts);
            if (matchedCarts.length > 0) {
                setParticularCart(matchedCarts[0]);
            } else {
                setParticularCart(null);
            }
        }
    }, [subtotal]);

    const clickAddCart = () => {
        if (key) {
            dispatch(addCart(item));
        } else {
            dispatch(push('/signin'));
        }
    };
    const clickPlusCart = () => {
        dispatch(increaseCart(particularCart.id));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(particularCart.id));
    };

    return (
        <>
            {/* <section class="items">
                <div class="product-one">
                    <div>
                        <img src={Item.image} alt="" />
                    </div>
                    <h4>{Item.name}</h4>
                    <p>${Item.price}</p>
                    <button onClick={clickAddCart}>Add +</button>
                </div>
            </section> */}
            <li>
                <img src={item.image} class="product-one" alt="" />
                <div class="info">
                    <div class="name">{item.name}</div>
                    <div class="info-bottom">
                        <div class="price">$ {item.price}</div>
                        {particularCart && particularCart.quantity > 0 ? (
                            <div class="number">
                                <span class="minus" onClick={clickMinusCart}>
                                    －
                                </span>
                                <span class="count">{particularCart.quantity}</span>
                                <span class="plus" onClick={clickPlusCart}>
                                    +
                                </span>
                            </div>
                        ) : (
                            <div class="add" onClick={clickAddCart}>
                                Add +
                            </div>
                        )}
                    </div>
                </div>
            </li>
        </>
    );
};

export default Item;
