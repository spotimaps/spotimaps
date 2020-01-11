import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Map, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { map, popup } from 'leaflet';

const firebaseSampleData = {
	songs: [
		{
			info: {
				name: 'Demons',
				artist: 'Imagine Dragons'
			},
			lat: 0,
			lng: 0
		}
	]
}


function App() {
	const [center, setCenter] = useState([ 51.505, -0.09 ]);
	const [songs, setSongs] = useState(firebaseSampleData);
	const [zoom, setZoom] = useState(13);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success, error);
	}, []);

	const success = (position) => {
		setCenter([ position.coords.latitude, position.coords.longitude ])
	}
	const error = () => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'You need to give location permissions!',
			// footer: '<a href>Why do I have this issue?</a>'
		  })
	}

	return (
		<Map center={center} zoom={zoom}>
			<TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
			<CircleMarker
                    center={center}
                    radius={8}
                    fill={true}
                    color={'#000000'}
                    fillColor={'#ff0000'}
                    fillOpacity={'0.75'}
                    // onClick={() => { setCenter.bind(null, popuploc) }}
                >
                    <Popup>
						<div> THIS IS A POP UP </div>
                    </Popup>
                </CircleMarker>
		</Map>
	);
}

export default App;
