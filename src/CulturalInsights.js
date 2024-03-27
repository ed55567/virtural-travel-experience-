//Cultural Insights.js
import React from "react";

const CulturalInsights = ({ city, culturalInfo }) => {
    return (
        <div>
            <h2>Cultural Insights of {city.name}</h2>
        <div>
           <h3>Overview</h3>
           <p>{culturalInfo.overview}</p>
        </div>
        <div>
            <h3>Traditions</h3>
            <p>{culturalInfo.traditions}</p>
        </div>
        {/*add more sections for festivals*/}
     </div>
    );
};

export default CulturalInsights