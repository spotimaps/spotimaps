import React from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import Marker from './Marker';

const InformationPopup = ({info, lat, lng}) => {
    return (
        <CircleMarker
            center={[lat, lng]}
            radius={4}
            fill={true}
            color={'#00ffff'}
            fillColor={'#00ffff'}
            fillOpacity={'0.75'}
            // onClick={() => { setCenter.bind(null, popuploc) }}
        >
            <Popup>
                <Marker info={info}/>
            </Popup>
        </CircleMarker>
    );
}

export default InformationPopup;
