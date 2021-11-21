import './css/MenuToggle.css';
import './css/MenuToggle-700.css';
import React from 'react';

const MenuToggle = props => {
    return (
        <div id="menuToggleWrapper">
            <label htmlFor="menuToggle">
                <input type="checkbox" id="menuToggle" onClick={props.onClick}/> 
                <span className="menu-toggle-span"></span>
                <span className="menu-toggle-span"></span>
                <span className="menu-toggle-span"></span>
            </label>
            
        </div>
    );
};

export default MenuToggle;