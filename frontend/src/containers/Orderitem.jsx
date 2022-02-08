import React from 'react'
import Header from '../components/Posts/Common/Header'

function Orderitem() {
    return (
        <div>
            <Header/>
            <div class="order-items">
        - Order your items - 
    </div>
<div class="color">
    <section class="orderitems">
        <div class="heading-items">
          <h2>Shipment Details</h2>
        </div>
        <div class="items-table">
          <table>
            <caption>
              Please check your items and confirm it
            </caption>
            <tr>
              <td>Item Name</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
            <tr>
              <td>Blue Berries</td>
              <td>1</td>
              <td>$39.00</td>
            </tr>
            <tr>
              <td>Onian</td>
              <td>2</td>
              <td>$40.00</td>
            </tr>
            <tr>
              <td>Apple</td>
              <td>2</td>
              <td>$12.00</td>
            </tr>
          </table>
          <div class="total">
            <ul>
              <li>Total Price</li>
              <li>3</li>
              <li>$91.00</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="item-details">
        <section class="sign">
          <div class="signupform">
            <ul>
              <li><label for="name">Full Name</label></li>
              <li>
                <input
                  type="text"
                  placeholder="Enter Recipient’s name"
                  id="name"
                />
              </li>
              <br />
              <li><label for="phone">Phone Number</label></li>
              <li>
                <input type="tel" placeholder="Enter Phone Number" id="phone" />
              </li>
              <br />
              <li><label for="adress">Street address or P.O. Box</label></li>
              <li>
                <input
                  type="text"
                  placeholder="Enter Street address or P.O. Box"
                  id="adress"
                />
              </li>
              <br />
              <li><label for="pin">PIN Code</label></li>
              <li>
                <input type="text" placeholder="Enter PIN code" id="pin" />
              </li>
              <br />
              <li>
                <label for="street"
                  >Apt, suite, unit, building, floor, etc.</label
                >
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Enter Apt, suite, unit, building, etc."
                  id="street"
                />
              </li>
              <br />
              <li><label for="city">City</label></li>
              <li><input type="text" placeholder="Enter City" id="city" /></li>
              <br />
              <li><label for="State">State</label></li>
              <li><input type="text" placeholder="Enter State" id="State" /></li>
              <br />
              <li>
                <button type="submit" class="submit">Submit</button>
              </li>
              <br />
            </ul>
          </div>
        </section>
        </section>

    </div>
            
        </div>
    )
}

export default Orderitem
