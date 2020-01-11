import React from 'react';
import './Marker.css';

const Marker = ({info}) => {
    return (
        <div className="marker-wrapper">
            <div id="song">
                <b>{info.name}</b>
                <img id="speaker" src={require("./speaker_icon.png")} alt="speaker" width="12" height="12"/>
            </div>
            <div id="artist">
                <b>{info.artist}</b>
            </div>
        </div>
    )
}

export default Marker;
