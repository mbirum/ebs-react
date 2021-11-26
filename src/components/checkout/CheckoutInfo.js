import './css/CheckoutInfo.css';
import './css/CheckoutInfo-700.css';
import React, { useEffect } from 'react';

const CheckoutInfo = props => {

    useEffect(() => {
        document.getElementById('cart').classList.add('cart-permanent');
        return () => {document.getElementById('cart').classList.remove('cart-permanent')};
    });

    function isEmailActive() {
        return document.getElementById('emailInput').classList.contains('form-input-entered');
    }
    
    function testOnClick() {
        if (isEmailActive()) {
            document.getElementById('emailInput').classList.remove('form-input-entered');
        }
        else {
            document.getElementById('emailInput').classList.add('form-input-entered');
        }
    }

    function getLabelForInput(input) {
        var name = input.getAttribute('name');
        var previous = input.previousSibling;
        var label = null;
        while (previous !== null && label === null) {
            try {
                if (previous.getAttribute('for') === name) {
                    label = previous;
                }
            }
            catch (e) {}
            previous = previous.previousSibling;
        }
        return label;
    }  

    function onInputChange(e) {
        let value = e.target.value;
        if (value !== null && value !== undefined && value !== '') {
            e.target.classList.add('form-input-entered');
            let label = getLabelForInput(e.target);
            if (label !== null) {
                label.classList.add('form-label-entered');
            }
        }
        else {
            e.target.classList.remove('form-input-entered');
            let label = getLabelForInput(e.target);
            if (label !== null) {
                label.classList.remove('form-label-entered');
            }
        }
    }

    return (
        <div id="checkoutInfo">
            <button onClick={testOnClick}>Test CSS </button>
            <form>
                <label className="checkout-form-label" htmlFor="email">Email</label> <br/>
                <input onChange={onInputChange} name="email" type="text" placeholder="Email" /> <br/>

                <label className="checkout-form-label" htmlFor="firstName">First Name</label> <br/>
                <input onChange={onInputChange} name="firstName" type="text" placeholder="First Name" /> <br/>

                <label className="checkout-form-label" htmlFor="lastName">Last Name</label> <br/>
                <input onChange={onInputChange} name="lastName" type="text" placeholder="Last Name" /> <br/>
                <br/>
                <h2 id="checkoutShippingHeader">Shipping Address</h2>

                <label className="checkout-form-label" htmlFor="addressLine1">Address</label> <br/>
                <input onChange={onInputChange} name="addressLine1" type="text" placeholder="Address" /> <br/>

                <label className="checkout-form-label" htmlFor="addressLine2">Apartment, suite, etc. (optional)</label> <br/>
                <input onChange={onInputChange} name="addressLine2" type="text" placeholder="Apartment, suite, etc. (optional)" /> <br/>

                <label className="checkout-form-label" htmlFor="city">City</label> <br/>
                <input onChange={onInputChange} name="city" type="text" placeholder="City" /> <br/>
                <br/>

                <label className="checkout-form-label" htmlFor="country">Country</label> <br/>
                <input onChange={onInputChange} name="country" type="text" placeholder="Country" /> 

                <label className="checkout-form-label" htmlFor="state">State</label> <br/>
                <input onChange={onInputChange} name="state" type="text" placeholder="State" /> 

                <label className="checkout-form-label" htmlFor="zipcode">ZIP Code</label> <br/>
                <input onChange={onInputChange} name="zipcode" type="text" placeholder="ZIP code" /> 
            </form>
        </div>
    );
};

export default CheckoutInfo;