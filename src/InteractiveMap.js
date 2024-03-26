import React from "react";
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const InteractiveMap = ({ city, attractions}) => {
    const mapStyles ={
        height: "400px",
        width: "100%"
    };

    return (
        <div>
            <h2>Interactive Map of {city.name}</h2>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={12}
                center={city.coordinates}
                >
               {attractions.map(attraction => (
                <Marker
                    key={attraction.id}
                    postion={attraction.coordinates}
                    title={attraction.name}
                >
                  <InfoWindow>
                        <div>{attraction.name}</div>
                  </InfoWindow>  
                </Marker>
               ))}     
            </GoogleMap>
        </div>
    );
};


export default InteractiveMap;