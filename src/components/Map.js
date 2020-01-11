import React, { useState, useEffect } from 'react';
import { Map as LMap, TileLayer } from 'react-leaflet';
import { locationPermissionError } from './Errors';
import 'leaflet/dist/leaflet.css';
import InformationPopup from './InformationPopup';

const Map = ({data}) => {
    const [center, setCenter] = useState([ 32, -118.09 ]);
    const [zoom] = useState(13);
    useEffect(() => {
		navigator.geolocation.getCurrentPosition(
            pos => {
                setCenter([ pos.coords.latitude,
                            pos.coords.longitude ]);
            }, locationPermissionError);
    }, []);
    return (
        <LMap center={center} zoom={zoom}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            {data.map( e => <InformationPopup key={e.id} {...e}/> )}
        </LMap>
    )
}

export default Map;
