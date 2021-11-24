import './css/QuantityPicker.css';
import './css/QuantityPicker-700.css';
import React, { useEffect, useState } from 'react';

const QuantityPicker = props => {
    const [value, setValue] = useState(props.defaultValue);
    let min = props.min;
    let max = props.max;
    let disabledClassName = (props.disabled) ? "quantity-disabled" : "";
    let onChange = props.onChange;

    function decrementQuantity(e) {
        var picker = e.target.closest('.product-quantity-picker');
        if (!props.disabled && value > min) {
            let oldValue = value;
            let newValue = oldValue - 1;
            setValue(newValue);
            onChange(oldValue, newValue, picker);
        }
    }

    function incrementQuantity(e) {
        var picker = e.target.closest('.product-quantity-picker');
        if (!props.disabled && value < max) {
            let oldValue = value;
            let newValue = oldValue + 1;
            setValue(newValue);
            onChange(oldValue, newValue, picker);
        }
    }

    useEffect(() => {
        setValue(props.defaultValue);
    }, [props.defaultValue]);

    return (
        <div id={props.id} className={"product-quantity-picker " + disabledClassName}>
            <div className="quantity-picker-minus" onClick={decrementQuantity}>-</div>
            <div className="quantity-picker-value">{value}</div>
            <div className="quantity-picker-plus" onClick={incrementQuantity}>+</div>
        </div>
    );
};

export default QuantityPicker;

