//CitySelection.js
import React from 'react';

const CitySelection = ({ cities, onSelectCity }) => {
    return(
        <div>
            <h2>Select a City</h2>
            <ul>
                {cities.map(city => (
                    <li key={city.id} onClick={() => onSelectCity(city)
                    }>
                        {city.name}    
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CitySelection;