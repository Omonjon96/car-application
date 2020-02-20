import React, {Component} from 'react';

import './item-filter.css';

export default class ItemFilter extends Component {
    render(){
        return(
            <div className="form-group">
                <label >Find Your City</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Name,Model"
                />
            </div>
        );
    }
}