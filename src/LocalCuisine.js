// LocalCuisine.js
import React from "react";

const LocalCuisine = ({ city, dishes, restaurants }) => {
    return (
        <><div>
            <h2>Local Cuisine in {city.name}</h2>
        </div><div>
                <h3>Popular Dishes</h3>
                <ul>
                    {dishes.map(dish => (
                        <li key={dish.id}>
                            <img src={dish.image} alt={dish.name} />
                            <p>{dish.name}</p>
                            <p>{dish.description}</p>
                        </li>
                    ))}
                </ul>
            </div><div>
                <h3>Nearby Restaurants</h3>
                <ul>
                    {restaurants.map(restaurant => (
                        <li key={restaurant.id}>
                            <p>{restaurant.name}</p>
                            <p>{restaurant.address}</p>
                        </li>
                    ))}
                </ul>
            </div></>
    );
};

export default LocalCuisine;