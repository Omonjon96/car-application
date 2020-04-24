import React, {Component} from 'react';

import './modal-show.css';


export default class ModalShow extends Component {


   
    render() {
        const { modalInfos, selected, modalStatus, onModalShow} = this.props;

        const modalDetails = modalInfos.filter((item) => item.id === selected)
                .map((item) =>{
                    return (
                        <div className="modal-body">
                            <p>Current car - <strong>{item.label}</strong></p>

                                <ul>
                            <li>Model- <strong>{item.model}</strong></li>
                            <li>Year- <strong>{item.year}</strong></li>
                            <li>Owner- <strong>{item.owner}</strong></li>
                            </ul>
                        </div>
                    )
                });

               let modalClassName = '';
                if(modalStatus) {
                  modalClassName += ' modal-show'
                } 

            return(
                <div className={modalClassName}>
                    <div class="modal fade show" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Do you want to buy this car?</h5>
                            <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick = { () => onModalShow(modalStatus)}
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                         {modalDetails}
                          <div class="modal-footer">
                            <button 
                            type="button" 
                            className="btn btn-primary"
                            
                            >
                              Buy
                          </button>
                            <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-dismiss="modal"
                            >
                            Cancel
                        </button>
                          </div>
                        </div>
                      </div>
                        </div>
                    <div className="modal-backdrop fade show"></div> 
                </div>
            )
       

       
    };
}


