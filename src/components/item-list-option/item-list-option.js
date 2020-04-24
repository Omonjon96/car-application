import React, {Component} from 'react';

import './item-list-option.css';


export default class ItemListOption extends Component {

   
  render() {
    
    const { label, model, id, onItemClick, selected} = this.props;
   
    let classNames = 'list-group-item list-group-item-action pointer';

    if(selected){
      classNames += ' active'
    }

    return (
        <li key={id} className={classNames} onClick={onItemClick} >
                {label} - {model}
        </li> 
    );
  };
}
