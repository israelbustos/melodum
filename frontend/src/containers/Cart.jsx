import React from 'react';
import Product1 from '../assets/img/p1.png';
import Product2 from '../assets/img/p2.png';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

function Cart() {
    return (
        <div>
            <Header/>
            <div class="cart">- My Carts -</div>

            <section class="items">
                <div class="product-one">
                    <div>
                        <img src={Product1} alt="" />{' '}
                    </div>
                    <h4>Casio SA - 77 Mini keyboard</h4>
                    <p>$600</p>
                    <button>Add +</button>
                </div>

                <div class="product-two">
                    <div>
                        <img src={Product2} alt="" />{' '}
                    </div>
                    <h4>Casio SA - 77 Mini keyboard</h4>
                    <p>$1000</p>
                    <button>Add +</button>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Cart;
