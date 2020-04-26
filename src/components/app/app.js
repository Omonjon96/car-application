import React, { Component} from 'react';

import Header from '../header';
import ItemFilter from '../item-filter';
import ItemList from '../item-list';
import ItemImage from '../item-image';
import ItemDetails from '../item-details';
import ModalShow from '../modal-show';
import ItemAddForm from '../item-add-form';

import FORD from '../../img/ford.png';
import BMW from '../../img/bmw.png';
import MERCEDES from '../../img/mercedes.png';
import TOYOTA from '../../img/toyota.png';
import HYUNDAI from '../../img/hyundai.png';


import './app.css';

export default class App extends Component {

    maxId = 6;

     state = {
        carOptions : [
          {
            label: 'FORD',
            model: 'Focus', 
            owner: 'Jane', 
            year: 2016, 
            phoneNumber: '+7 929 123 59 85', 
            imageUrl: FORD, 
            id: 1
          },
          {
            label: 'BMW', 
            model: 'X5', 
            owner: 'John', 
            year: 2017, 
            phoneNumber: '+7 929 123 45 67', 
            imageUrl: BMW, 
            id: 2
          },
          {
            label: 'MERCEDES', 
            model: 'Benz', 
            owner: 'Max', 
            year: 2013, 
            phoneNumber: '+7 929 123 36 28', 
            imageUrl: MERCEDES, 
            id: 3
          },
          {
            label: 'HYUNDAI', 
            model: 'Erlanta', 
            owner: 'Alex', 
            year: 2014, 
            phoneNumber: '+7 929 473 56 12', 
            imageUrl: HYUNDAI, 
            id: 4
          },
          {
            label: 'TOYOTA', 
            model: 'Avalon', 
            owner: 'Tom', 
            year: 2016, 
            phoneNumber: '+7 929 473 56 12', 
            imageUrl: TOYOTA, 
            id: 5
          }
        ],
        selected: 1,
        modalStatus: false,
        search: ''
     };
      
     handleClick = id => {
      this.setState({ 
        selected: id
      });
    }; 

    addItem = (text) => {
      console.log('Added', text);
    };

    onModalShow = () =>{
      this.setState(({modalStatus}) => {
          return {
            modalStatus: !modalStatus
          }
      });
    };


    onItemSearch = (search) => {
      this.setState({ 
          search
      })
    };

    searchItems(carOptions, search) {
      if(search.length === 0){
        return carOptions;
      }
      return (carOptions.filter((item) => {
        return (item.label.toLowerCase().indexOf(search.toLowerCase()) > -1 || item.model.toLowerCase().indexOf(search.toLowerCase()) > -1)
      })
      )
    }
 
    render() {
      const {carOptions, selected, modalStatus, search} = this.state;

      const visibleItems = this.searchItems(carOptions, search);
      
      let modalView = modalStatus ? <ModalShow   className = "modal-show"
                          modalInfos = {carOptions}
                          selected = {selected}
                          modalStatus = {modalStatus}
                          onModalShow = {this.onModalShow} 
                          /> 
                          : null;

      return (
        <div className="car-app pt-5">
          <Header/>
          <div className="row">
              <div className="col-md-4 mt-3">
                <ItemFilter
                  cars = {carOptions}
                  onItemSearch = {this.onItemSearch}
                />
                
                <ItemList 
                  carInfo = {visibleItems}
                  onItemSelect={this.handleClick}
                  selected = {selected}
                />
              
              </div>
              <div className="col-md-8">
                <div className="row mt-3">
                    <div className="col-md-5">
                        <ItemImage 
                          carImage = {carOptions}
                          selected={selected}
                        />
                    </div>
                    <div className="col-md-7">
                        <ItemDetails 
                          carDetails = { carOptions }
                          selected = { selected }
                          modalStatus = {modalStatus}
                          onModalShow = {this.onModalShow}
                        />
                    </div>
                </div>
              </div>
          </div>

          <ItemAddForm onItemAdded = {this.addItem}/>
           {/* <ModalShow 
                    className = "modal-show"
                    modalInfos = {carOptions}
                    selected = {selected}
                    modalStatus = {modalStatus}
            /> */}

            {modalView}
        </div>
      );
    };
  
}

