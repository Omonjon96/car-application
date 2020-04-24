import React from 'react';

import './item-image.css';



const ItemImage = ({carImage, selected}) => {


    const filteredImage = carImage.filter((item) => item.id === selected)
            .map((item) =>{
                return(
                    <div key={item.id}>
                        <h2>{item.label}</h2>
                        <img src={item.imageUrl} alt={item.label} className="rounded detailed-car-image img-responsive pr-3" />
                    </div>
                )
            })
  
   

    return(
        <div>
            {filteredImage}
        </div>
    );
};


export default ItemImage;