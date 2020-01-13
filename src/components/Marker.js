import React, {useEffect, useState} from 'react';
import { Popup } from 'react-leaflet';
import './Marker.css';

const Marker = ({info}) => {
    const [audio, setAudio] = useState('');
    useEffect(() => {
        if(info.audio){
            setAudio(new Audio(info.audio));
        }
    }, [info]);
    return (
        <Popup onClose={() => {if(audio.duration > 0 && !audio.paused) audio.pause()}}>
            <div className="marker-wrapper">
                <div id="song">
                    <b>{info.name}</b>
                    <img id="speaker" src={require("./speaker_icon.png")} alt="speaker" width="12" height="12" onClick={() => {
                        audio.play();
                    }}/>
                </div>
                <div id="artist">
                    <b>{info.artist}</b>
                </div>
                {info.img && <img src={info.img.url} alt="album" className="image" />}
            </div>
        </Popup>
    )
}

export default Marker;
