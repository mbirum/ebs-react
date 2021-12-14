import './css/CheckoutPage.css';
import './css/CheckoutPage-700.css';
import React, { useEffect, useState } from 'react';
import CheckoutInfo from './CheckoutInfo';
import CheckoutPay from './CheckoutPay';

const CheckoutPage = props => {
    const [stage, setStage] = useState('info');
    const [stagedElements, setStagedElements] = useState([]);
    const [checkoutInfo, setCheckoutInfo] = useState({});

    function proceedToPayment() {
        setStage('pay');
    }

    // default load info component
    useEffect(() => {
        setStagedElements([<CheckoutInfo key={1} save={setCheckoutInfo} proceed={proceedToPayment}/>]);
    }, []);

    useEffect(() => {
        if (stage === 'pay') {
            setStagedElements([<CheckoutPay key={1}/>]);
        }
    }, [stage]);

    return (
        <div id="checkoutPageWrapper">
            {stagedElements}
        </div>
    );
};

export default CheckoutPage;