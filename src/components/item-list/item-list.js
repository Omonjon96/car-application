import React, {Component} from 'react';

import ItemListOption from '../item-list-option';

import './item-list.css';

export default class ItemList extends Component {


        render() {
            
            const {carInfo, onItemSelect, selected} = this.props;
            const elements = carInfo.map((item) => {

                return (
                    <ItemListOption
                        key = {item.id}
                        label = {item.label}
                        model = {item.model}
                        id = {item.id}
                        selected = {item.id === selected}
                        onItemClick={() => onItemSelect(item.id)}
                    />
                )
            });
            return(
                <ul className="list-group">
                   {elements}
                </ul>
            );
        };
}

