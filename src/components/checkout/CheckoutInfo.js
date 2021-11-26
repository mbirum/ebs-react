import './css/CheckoutInfo.css';
import './css/CheckoutInfo-700.css';
import React, { useEffect } from 'react';

const CheckoutInfo = props => {

    useEffect(() => {
        document.getElementById('cart').classList.add('cart-permanent');
        document.getElementById('site-footer').classList.add('checkout-footer');
        return () => {
            document.getElementById('cart').classList.remove('cart-permanent');
            document.getElementById('site-footer').classList.remove('checkout-footer');
        };
    });

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
            <form>
                <h2 className="checkout-form-header">Contact Information</h2>
                <label className="checkout-form-label" htmlFor="email">Email</label> <br/>
                <input className="form-length-full" onChange={onInputChange} name="email" type="text" placeholder="Email" /> <br/>
                
                <br/><br/><br/>
                <h2 className="checkout-form-header">Shipping Address</h2>

                <table className="form-length-full" style={{padding:0, borderSpacing:0}}>
                    <tbody>
                        <tr style={{width:100+'%'}}>
                            <td style={{width:50+'%', paddingRight:5 + 'px'}}>
                                <label className="checkout-form-label" htmlFor="firstName">First Name</label> <br/>
                                <input className="form-length-full" onChange={onInputChange} name="firstName" type="text" placeholder="First Name" /> <br/>
                            </td>
                            <td style={{width:50+'%', paddingLeft:5 + 'px'}}>
                                <label className="checkout-form-label" htmlFor="lastName">Last Name</label> <br/>
                                <input className="form-length-full" onChange={onInputChange} name="lastName" type="text" placeholder="Last Name" /> <br/>    
                            </td>
                        </tr>
                    </tbody>
                </table>

                <label className="checkout-form-label" htmlFor="address1">Address</label> <br/>
                <input className="form-length-full" onChange={onInputChange} name="address1" type="text" placeholder="Address" /> <br/>

                <label className="checkout-form-label" htmlFor="addressLine2">Apartment, suite, etc. (optional)</label> <br/>
                <input className="form-length-full" onChange={onInputChange} name="addressLine2" type="text" placeholder="Apartment, suite, etc. (optional)" /> <br/>

                <table className="form-length-full" style={{padding:0, borderSpacing:0}}>
                    <tbody>
                        <tr style={{width:100+'%'}}>
                            <td style={{width:33+'%', paddingRight:5 + 'px'}}>
                                <label className="checkout-form-label" htmlFor="city">City</label> <br/>
                                <input className="form-length-full" onChange={onInputChange} name="city" type="text" placeholder="City" />
                            </td>
                            <td style={{width:34+'%', padding:'0 5px'}}>
                                <label className="checkout-form-label" htmlFor="state">State</label> <br/>
                                <input className="form-length-full" onChange={onInputChange} name="state" type="text" placeholder="State" /> 
                            </td>
                            <td style={{width:33+'%', paddingLeft:5 + 'px'}}>
                                <label className="checkout-form-label" htmlFor="zipcode">ZIP Code</label> <br/>
                                <input className="form-length-full" onChange={onInputChange} name="zipcode" type="text" placeholder="ZIP code" /> 
                            </td>
                        </tr>
                    </tbody>
                </table>


            </form>
        </div>
    );
};

export default CheckoutInfo;