import React from 'react';
import './Marker.css';

const Marker = ({info}) => {
    return (
        <div className="marker-wrapper">
            {JSON.stringify(info)}
        </div>
    )
}

export default Marker;
