import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../reducks/items/selectors';
import { fetchItems } from '../reducks/items/operations';
import { fetchCarts } from '../reducks/carts/operations';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Mainimage from '../components/Common/Mainimage';
import Item from '../components/Common/Item';

const Home = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const items = getItems(selector);

    useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchCarts());
    }, []);

    return (
        <>
            <Header />
            <Mainimage />
            <section class="main">
                <ul class="items">
                    {items && items.length
                        ? items.map(item => (
                              <li>
                                  <Item key={item} />
                              </li>
                          ))
                        : 'not an array'}
                </ul>
            </section>
            <Footer />
        </>
    );
};

export default Home;
