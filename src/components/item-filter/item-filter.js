import React, {Component} from 'react';

import './item-filter.css';

export default class ItemFilter extends Component {


    state = {
        status: ''
    };


    ItemSearch = (event) => {
        const {onItemSearch = () => {}} = this.props;
        this.setState({ 
            status: event.target.value
        })
        onItemSearch(event.target.value);
    };
   
    render(){
        // const {cars} = this.props;
        const {status} = this.state;
        return(
            <div className="form-group">
                <label >Find Your Car</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Name, Model"
                    value = {status}
                    onChange = {this.ItemSearch}
                />
            </div>
        );
    }
}