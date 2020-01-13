import React, { useState } from 'react';
import { Map as LMap, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import InformationPopup from './InformationPopup';

const Map = ({data, center}) => {
    const [zoom] = useState(13);    
    return (
        <LMap center={center} zoom={zoom}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            {data.map( e => <InformationPopup key={e.id} {...e}/> )}
        </LMap>
    )
}

export default Map;
