import React from 'react';

import './header.css';

const Header = ({carName}) => {
    
    return (
        <div className="row">
            <div className="col">
                <h1>{carName.label}</h1>
            </div>
        </div>
    )
};

export default Header;