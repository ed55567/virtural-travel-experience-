//VirtualTour.js
import React from 'react';
import PanoramaViewer from 'react-360-viewer';

const VirtualTour = ({ city }) => {
    return(
        <div>
            <h2>Virtual Tour of {city.name}</h2>
            <PanoramaViewer
                width="100%"
                height="500px"
                imageUrl={city.panoramaImage}
                onSceneChange={sceneId => console.log('Changed to scene', sceneId)}
                />
        </div>
    );
};

export default VirtualTour;