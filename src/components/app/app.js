import React from 'react';

import Header from '../header';
import ItemFilter from '../item-filter';
import ItemList from '../item-list';
import ItemImage from '../item-image';
import ItemDetails from '../item-details';
import FORD from './ford.png';
import BMW from './bmw.png';
import MERCEDES from './mercedes.png';


import './app.css';

const  App = () => {


     const carOptions = [
        {
          label: 'Ford',
          model: 'Focus', 
          owner: 'Max', 
          year: 2016, 
          phoneNumber: '+7 929 123 45 67', 
          imageUrl: {FORD}, 
          id: 1
        },
        {
          label: 'BMW', 
          model: 'X5', 
          owner: 'John', 
          year: 2017, 
          phoneNumber: '+7 929 123 45 67', 
          imageUrl: {BMW}, 
          id: 2
        },
        {
          label: 'MERCEDES', 
          model: 'Benz', 
          owner: 'Max', 
          year: 2016, 
          phoneNumber: '+7 929 123 45 67', 
          imageUrl: {MERCEDES}, 
          id: 3
        }
      ]
 
 
    
 

    return (
      <div className="car-app pt-5">
        <Header carName = {carOptions}/>
        <div className="row">
            <div className="col-md-4 mt-3">
              <ItemFilter/>
              <ItemList carInfo = {carOptions}/>
            </div>
            <div className="col-md-8">
              <div className="row mt-4">
                  <div className="col-md-5">
                      <ItemImage carImage = {carOptions}/>
                  </div>
                  <div className="col-md-7">
                      <ItemDetails carDetails = {carOptions}/>
                  </div>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <ul className="list-group">

                </ul>
            </div>
        </div>
      </div>
    );
  
}

export default App;