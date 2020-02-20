import React from 'react';

import './item-list-option.css';

const ItemListOption = ({label, model}) => {
    return (
        <span>{label} - {model}</span>
    );
};

export default ItemListOption;