import React from 'react';
import Header from '../components/Posts/Common/Header';
function Thanks() {
    return (
        <div>
            <Header/>
            <div class="thank-you">- Thank you for your ordering -</div>
            <div class="message">
                <p>
                    Thank you for your ordering. We received your request.
                    <br />
                    Our stuff will be contacting with you to tell next steps.
                </p>
            </div>

            <footer>
                <button class="back-to-home">Back to Home</button>
            </footer>
        </div>
    );
}

export default Thanks;
