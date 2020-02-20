import React from 'react';

import './item-image.css';



const ItemImage = ({carImage}) => {

    // const url = carImage.map((itemImage) => {
    //     console.log(itemImage);
    //     return(
            
    //         <img key={itemImage.id} src={itemImage.imageUrl} className="rounded detailed-car-image img-responsive pr-3" alt="Car Image"/>
    //     );
    // });

  
   

    return(
        <div>
            <h2>Car Name</h2>
			{/* {url} */}
            <img src={carImage.imageUrl} className="rounded detailed-car-image img-responsive pr-3" alt="Car Image"/>
        </div>
    );
};


export default ItemImage;