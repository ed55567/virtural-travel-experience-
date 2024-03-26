//VirtualTour.js
import React from 'react';

const VirtualTour = ({ city }) => {
    return(
        <div>
            <h2>Virtual Tour of {city.name}</h2>
             {/*Display 360-degree panoramic images here */}
        </div>
    );
};

export default VirtualTour;