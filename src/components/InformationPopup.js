import React from 'react';
import { CircleMarker } from 'react-leaflet';
import Marker from './Marker';

const InformationPopup = ({info, lat, lng}) => {
    const getColor = () => {
        // console.log(info.color === undefined ? '#1DB954' : info.color);
        return info.color === undefined ? '#1DB954' : info.color;
    }
    return (
        <CircleMarker
            center={[lat, lng]}
            radius={5}
            fill={true}
            color={getColor()}
            fillColor={getColor()}
            fillOpacity={'1'}
            // onClick={() => { setCenter.bind(null, popuploc) }}
        >
            <Marker info={info}/>
        </CircleMarker>
    );
}

export default InformationPopup;
