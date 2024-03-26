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
                      <img src={city.image} alt={city.name} />
                        {city.name}    
                    </li>
                ))}
            </ul>
            <input type="text" placeholder='Search cities'/>
        </div>
    );
};

export default CitySelection;