import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    render() {
        return (
            <form className="item-add-form">
                <input type="text" placeholder="Enter car name" className="form-control"/>
                <input type="text" placeholder="Enter car model" className="form-control"/>
                <input type="text" placeholder="Enter car owner" className="form-control"/>
                <input type="number" placeholder="Enter Year" className="form-control"/>
                <input type="number" placeholder="Enter Pnone Number" className="form-control"/>
                <input type="file" placeholder="Enter Pnone Number" className="form-control"/>
                <button className="btn btn-block btn-primary"
                onClick = {() => this.props.onItemAdded('hello world')}
                >
                    Add Item
                </button>
            </form>
        )
    }
};
