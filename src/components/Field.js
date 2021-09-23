import React from 'react';

const Field = props => {
    return (
        <input
            className="field"
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
        />
    );
};

export default Field;