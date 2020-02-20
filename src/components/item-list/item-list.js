import React, {Component} from 'react';

import ItemListOption from '../item-list-option';

import './item-list.css';

const ItemList = ({carInfo}) => {

        const elements = carInfo.map((item) => {

            

            return (
                <li key={item.id} className="list-group-item list-group-item-action pointer">
                    <ItemListOption
                        label = {item.label}
                        model = {item.model}
                    />
                </li>
            )
        });

   
        return(
            <ul className="list-group">
               {elements}
            </ul>
        );
    
}

export default ItemList;