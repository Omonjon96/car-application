import React, { Component } from 'react';


import './item-details.css';

export default class ItemDetails extends Component {

   state = {
        phoneVisibility: false
   };


   onItemPhoneVisibile = () => {
        this.setState (({phoneVisibility}) => {
            return {
                phoneVisibility: !phoneVisibility
            };
        })
    };

    // onItemModalVisible = () => {
    //     this.setState(({modalStatus}) => {
    //         return {
    //             modalStatus: !modalStatus
    //         }
    //     })
    // };
   
    render() {

        const { carDetails, selected, modalStatus , onModalShow} = this.props;

        const {phoneVisibility} = this.state;

        let phoneClassName = 'phone';

       

    //    if(phoneVisibility) {
    //        phoneClassName += ' phone-enter-active'
    //    }
        
       

        const filteredInfo = carDetails.filter((item) => item.id === selected)
                .map((item) =>{
                    return(
                        <div key={item.id}>
                            <ul key = {item.id}>
                                <li>Model - <strong>{item.model}</strong></li>
                                <li>Year - <strong>{item.year}</strong></li>
                                <li>Owner - <strong>{item.owner}</strong></li>
                            </ul>
                            <div className="phone-block">
                                <span className = {phoneClassName} >		
                                    <p>{ phoneVisibility ? item.phoneNumber : null} </p>
                                </span>
                            </div>
                        </div>
                    )
                });


       

        return (
            <div className="item-details">
                <h5>Car details</h5>
                {filteredInfo}
                
                <button 
                    className="btn btn-outline-success mr-3" 
                    onClick = {this.onItemPhoneVisibile}>{phoneVisibility ? 'Hide me' : 'Show me'}
                </button>
                <button 
                    className="btn btn-primary" 
                    onClick = {() => onModalShow(modalStatus) }
                    >
                        Buy
                </button>
               
            </div>
        );
    }
   
};

