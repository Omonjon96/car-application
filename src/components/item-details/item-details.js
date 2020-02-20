import React from 'react';

import './item-details.css';

const ItemDetails = ({carDetails}) => {

   

    return (
        <div className="item-details">
            <h5>Car details</h5>
            <ul>
                <li>Model - <strong>{carDetails.model}</strong></li>
                <li>Year - <strong>{carDetails.year}</strong></li>
                <li>Owner - <strong>{carDetails.owner}</strong></li>
            </ul>

            {/* <div class="phone-block">
                <transition name="phone">		
                    <p v-if="phoneVisibility">{{car.phone}}</p>
                </transition>
            </div> */}

            <button className="btn btn-outline-success mr-3" >Show me</button>
            <button className="btn btn-primary" >Buy</button>

        </div>
    );
};

export default ItemDetails;