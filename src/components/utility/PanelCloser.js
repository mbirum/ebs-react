import './css/PanelCloser.css';
import './css/PanelCloser-700.css';
import React from 'react';

const PanelCloser = props => {

    return (
        <div className="panel-closer-wrapper" onClick={props.onClick}>
            <input type="checkbox" className="panel-closer" /> 
            <span className="panel-closer-span"></span>
            <span className="panel-closer-span"></span>
        </div>
    );
};

export default PanelCloser;